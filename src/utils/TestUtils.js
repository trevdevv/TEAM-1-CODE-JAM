// Function to find DOM components recursively
export function findDOMComponent(component, searchName) {
  // const component = Array.isArray(component) ? component[0] : component;

  console.log(component);

  let found = false;

  if (!component || !component.length) {
    found = false;
  }
  if (component.props.className && component.props.id) {
    found =
      component.props.className === searchName ||
      component.props.id === searchName;
  } else if (component.props.className) {
    found = component.props.className === searchName;
  } else {
    found = component.props.id === searchName;
  }

  if (found) {
    return component;
  }

  const findComponent = component.children.find((component) => {
    return findDOMComponent(component, searchName);
  });

  return findComponent;
}
