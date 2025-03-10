import useCounter from "../useCounter";
import { act } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { beforeEach } from "vitest";

describe("useCounter", () => {
  beforeEach(() => {
    // 在每个测试后自动清理 Zustand 状态
    useCounter.setState({ count: 0 });
  });

  it("should initialize with count 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should increment count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("should decrement count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  it("should reset count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
