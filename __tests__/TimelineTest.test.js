import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";

// Import timeline component
import Timeline from "../src/components/Timeline";

// Initialize chrome
const chrome = require("sinon-chrome");
window.chrome = chrome;

// Test if timeline is set up correctly
test("Timeline is set up correctly", () => {
  const component = renderer.create(<Timeline />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
