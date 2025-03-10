import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../UserList/UserList";
import { expect } from "vitest";

describe("UserList component", () => {
  it("renders User List heading", () => {
    render(<UserList />);
    expect(screen.getByText("User List")).toBeInTheDocument();
  });

  it("renders users after timeout", async () => {
    render(<UserList />);

    const alice = await screen.findByText("Alice", {}, { timeout: 3000 });
    const bob = await screen.findByText("Bob", {}, { timeout: 3000 });
    const charlie = await screen.findByText("Charlie", {}, { timeout: 3000 });

    expect(alice).toBeInTheDocument();
    expect(bob).toBeInTheDocument();
    expect(charlie).toBeInTheDocument();
  });
});
