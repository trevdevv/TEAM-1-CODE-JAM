import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";

import App from "../src/App";
import Timeline from "../src/components/Timeline";

const chrome = require("sinon-chrome");
window.chrome = chrome;

test("App is set up correctly", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Timeline is set up correctly", () => {
  const component = renderer.create(<Timeline />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("Testing side navigation bar", () => {
  const component = renderer.create(<App />);

    let tree = component.toJSON();

    console.log(findDOMComponent(tree, "SideNav"));
    expect(tree).toMatchSnapshot();

  // Continue testing side nav bar, click each tab
});

// Function to find DOM components recursively
function findDOMComponent(component, searchName) {
  const child = Array.isArray(component) ? component[0] : component;

  console.log(child);

  if (!component.children || !component.children.length) {
    return null;
  }
  if (child.props.className && child.props.id) {
    return (
      child.props.className === searchName || child.props.id === searchName
    );
  } else if (child.props.className) {
    return child.props.className === searchName;
  } else {
    return child.props.id === searchName;
  }

  const findComponent = child.children.find((child) => {
    return !!findDOMComponent(child, searchName);
  });

  return findComponent;
}
