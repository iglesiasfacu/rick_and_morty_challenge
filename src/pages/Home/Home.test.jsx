import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders content", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(
    <Router>
      <Home />
    </Router>
  );

  // eslint-disable-next-line testing-library/no-debugging-utils
  component.debug();
  console.log(component);
});

test("renders text in home", () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = screen.getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
