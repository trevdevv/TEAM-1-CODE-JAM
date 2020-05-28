import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";

// Import home component
import Home from "../src/components/Home";

// Initialize chrome
const chrome = require("sinon-chrome");
window.chrome = chrome;

// Check charts are rendering correctly
test("Home page is set up correctly", () => {
  const component = renderer.create(<Home />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
