import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // render(<App />);
  // // const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByRole("link", { name: /learn react/i });
  // expect(linkElement).toBeInTheDocument();
});

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {});
