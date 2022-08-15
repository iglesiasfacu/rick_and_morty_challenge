import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CharCounter from "./CharCounter";

test("renders content", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(<CharCounter />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  component.debug();
  console.log(component);
});
