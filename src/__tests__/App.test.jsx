import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders Vite and React logos", () => {
    render(<App />);
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();
  });

  it("renders the heading", () => {
    render(<App />);
    const heading = screen.getByText("Vite + React");
    expect(heading).toBeInTheDocument();
  });

  it("increments count on button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });

  it("renders the edit message", () => {
    render(<App />);
    const editMessage = screen.getByTestId("test_HMR_text");
    expect(editMessage).toBeInTheDocument();
  });

  it("renders the documentation message", () => {
    render(<App />);
    const docsMessage = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(docsMessage).toBeInTheDocument();
  });
});
