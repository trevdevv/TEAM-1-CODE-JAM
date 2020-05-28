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
import Teams from "../src/components/Teams";

// Initialize chrome
const chrome = require("sinon-chrome");
window.chrome = chrome;

// Test teams setup
test("Testing teams set up correctly", () => {
  /* const component = renderer.create(
    <Router>
      <Teams />
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); */
});
