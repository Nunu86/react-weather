import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders input and button", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/enter city/i);
  const button = screen.getByText(/get weather/i);

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
