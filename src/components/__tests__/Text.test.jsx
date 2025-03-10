import { render, screen } from "@testing-library/react";

import { Text } from "../Text/Text";

describe("Text component", () => {
  it("renders correctly", () => {
    render(<Text />);
    const textElement = screen.getByText(/this is Text component!/i);
    expect(textElement).toBeInTheDocument();
  });
});
