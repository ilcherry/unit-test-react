import { useMount } from "../useMount";

import { render } from "@testing-library/react";

const cb = vi.fn();

function App() {
  useMount(cb);

  return <div></div>;
}

describe("useMount", () => {
  it("should call the callback on mount", async () => {
    render(<App />);

    expect(cb).toHaveBeenCalledTimes(1);
  });
});
