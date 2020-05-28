import React from "react";
import '@testing-library/jest-dom';
import "babel-polyfill";
import {render, fireEvent, screen} from '@testing-library/react'

// Import app
import App from "../src/App";

// Initialize chrome
const chrome = require("sinon-chrome");
window.chrome = chrome;

test("App is set up correctly", () => {
  render(<App />)

  fireEvent.click(screen.getByText(/Timeline/i))

  expect(screen).toHaveTextContent(/www.youtube.com/i)
});