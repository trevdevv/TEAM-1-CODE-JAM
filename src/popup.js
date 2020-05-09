/**
 * Get the email from background page and update the html
 * @author : Karl Wang
 * @param {function} setEmailCallback Send the email to the html
 */
function getEmail(setEmailCallback) {
  // the message to be sent
  let msg = { for: "background", message: "get email" };
  chrome.runtime.sendMessage(msg, function (response) {
    // set the email on html
    setEmailCallback(response.email);
  });
}
/**
 * Get the prefix of the email and show it on html
 * @author : Karl Wang
 * @param {string} email The email to be shown on html
 */
function setHeaderEmail(email) {
  let insertEmail = document.querySelector("#insertEmail");
  insertEmail.textContent = email.substr(0, email.indexOf("@"));
}

// function setTeamCode(teamCode) {
//   let code = document.querySelector("#autogeneratedTeamCode");
//   code.value = teamCode;
// }
// function getTeamCode() {
//   return new Promise(function (resolve, reject) {
//     let msg = { for: "background", message: "get team code" };
//     chrome.runtime.sendMessage(msg, function (response) {
//       resolve(response.teamCode);
//     });
//   });
// }
/**
 * Setup the listener for create team and join team button
 * @author : Karl Wang
 */
function setupButtonListener() {
  let createButton = document.querySelector("#createButton");
  createButton.addEventListener("click", onCreateTeam);
  let joinButton = document.querySelector("#joinButton");
  joinButton.addEventListener("click", onJoinTeam);
}

/**
 * Send the team name to background, which handles create team on database
 * Do preliminary checking if the team name is legit
 * @author : Karl Wang
 */
function onCreateTeam() {
  let teamName = document.querySelector("#teamName").value;
  //   team name is empty
  if (teamName === "") {
    M.toast({ html: "Team name cannot be empty!", displayLength: 2000 });
    return;
  }
  let msg = {
    for: "background",
    message: "create team",
    teamName: teamName,
  };
  //   send to background page
  chrome.runtime.sendMessage(msg);
}
/**
 * Send the request along with the team code to background page
 * Do preliminary checking to see if the team code is valid
 * @author : Karl Wang
 */
function onJoinTeam() {
  let teamCode = document.querySelector("#teamCode").value;
  if (teamCode.length != 5) {
    M.toast({ html: "Team code should be 5 characters!", displayLength: 2000 });
    return;
  }
  //   check if it only contains alphabets and numbers
  const regex = /^[A-Z0-9]+$/i;
  if (!regex.test(teamCode)) {
    M.toast({
      html: "Team code should only contains alphabets and numbers",
      displayLength: 2000,
    });
    return;
  }

  let msg = {
    for: "background",
    message: "join team",
    teamCode: teamCode,
  };
  chrome.runtime.sendMessage(msg, function (response) {
    if (response === "team code not found") {
      M.toast({
        html: "Team code does not exist!",
        displayLength: 2000,
      });
      return;
    } else if (response === "success") {
      // do something (routing)
    } else if (response === "already joined the group") {
      M.toast({
        html: "You have already joined this group",
        displayLength: 2000,
      });
      return;
    }
  });
}
/**
 * The main function
 * @author : Karl Wang
 */
async function main() {
  M.AutoInit();
  getEmail(setHeaderEmail);
  setupButtonListener();
}

main();
