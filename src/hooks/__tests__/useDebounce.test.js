import { renderHook } from "@testing-library/react-hooks";
import useDebounce from "../useDebounce";

import { act } from "react";

describe("useDebounce", () => {
  vi.useFakeTimers();

  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));

    expect(result.current).toBe("initial");
  });

  it("should debounce the value", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    rerender({ value: "changed", delay: 500 });

    // Value should not change immediately
    expect(result.current).toBe("initial");

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Value should be updated after the delay
    expect(result.current).toBe("changed");
  });

  it("should reset the debounce timer if value changes within the delay period", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    rerender({ value: "changed", delay: 500 });

    // Fast-forward time by less than the delay
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Value should not change yet
    expect(result.current).toBe("initial");

    // Change the value again
    rerender({ value: "changed again", delay: 500 });

    // Fast-forward time by the remaining delay
    act(() => {
      vi.advanceTimersByTime(200);
    });

    // Value should still not change
    expect(result.current).toBe("initial");

    // Fast-forward time by the new delay
    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Value should be updated after the new delay
    expect(result.current).toBe("changed again");
  });
});
