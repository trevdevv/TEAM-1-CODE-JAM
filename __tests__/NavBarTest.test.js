import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";

// Import side nav component
import NavBar from "../src/components/NavBar";

// Initialize chrome
const chrome = require("sinon-chrome");
window.chrome = chrome;

// Test side nav setup
test("Testing navigation bar", () => {
  const component = renderer.create(
    <Router>
      <NavBar />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
