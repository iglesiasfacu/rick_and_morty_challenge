import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import EpisodeLocations from "./EpisodeLocations";

test("renders content", () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const component = render(<EpisodeLocations />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  component.debug();
  console.log(component);
});

// test("renders text in EpisodeLocations", () => {
//   render(
//     <Router>
//       <EpisodeLocations />
//     </Router>
//   );
//   const linkElement = screen.getByText(/Season and Episode/i);
//   expect(linkElement).toBeInTheDocument();
// });
