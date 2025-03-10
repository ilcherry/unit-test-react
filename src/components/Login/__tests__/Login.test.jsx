import { render, screen, fireEvent } from "@testing-library/react";

import Login from "../Login";
import { expect } from "vitest";

describe("Login Component", () => {
  it("renders the login form", () => {
    render(<Login />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /登录/i })).toBeInTheDocument();
  });

  it("updates the username and password fields", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("password123");
  });

  it("handles form submission", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /登录/i });

    const spyConsole = vi.spyOn(console, "log").mockImplementation(() => {});

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(button);

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("password123");

    expect(spyConsole).toHaveBeenCalledTimes(2);
  });
});
