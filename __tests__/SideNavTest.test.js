import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";

// Import side nav component
import SideNav from "../src/components/SideNav";

// Initialize chrome
const chrome = require("sinon-chrome");
window.chrome = chrome;

// Test side nav setup
test("Testing side navigation bar", () => {
  /* const component = renderer.create(<SideNav />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); */
});
