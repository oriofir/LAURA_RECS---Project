import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("slides are rendering", () => {
  render(<HomeCarousel />);

  const linkElement = screen.getByText("First slide label");
  expect(linkElement).toBeShowing();
});
