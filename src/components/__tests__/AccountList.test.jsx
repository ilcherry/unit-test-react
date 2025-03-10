// AccountList.test.js
import { render, screen, waitFor } from "@testing-library/react";
import AccountList from "../AccountList/AccountList";

// 模拟 API 请求
global.fetch = vi.fn();

describe("AccountList", () => {
  it("should display users after successful fetch", async () => {
    // 模拟成功的 API 响应
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ],
    });

    render(<AccountList />);

    // 等待用户数据加载
    await waitFor(() => screen.getByText("Alice"));
    await waitFor(() => screen.getByText("Bob"));

    // 检查用户是否渲染
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("should display an error message when fetch fails", async () => {
    // 模拟失败的 API 响应
    fetch.mockRejectedValueOnce(new Error("Failed to fetch users"));

    render(<AccountList />);

    // 等待错误消息渲染
    await waitFor(() => screen.getByText(/Error:/));

    // 检查错误消息
    expect(
      screen.getByText("Error: Failed to fetch users")
    ).toBeInTheDocument();
  });

  it("should display an error message when API response is not ok", async () => {
    // 模拟 API 返回失败的响应（非 2xx 状态）
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ message: "Internal Server Error" }),
    });

    render(<AccountList />);

    // 等待错误消息渲染
    await waitFor(() => screen.getByText(/Error:/));

    // 检查错误消息
    expect(
      screen.getByText("Error: Failed to fetch users")
    ).toBeInTheDocument();
  });
});
