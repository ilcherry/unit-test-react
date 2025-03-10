// Button.test.js
import { render } from "@testing-library/react";
import Button from "../Button/Button";

describe("Button Component Snapshot", () => {
  it("should match the snapshot", () => {
    // 渲染组件
    const { asFragment } = render(<Button label="Click Me" />);

    // 使用快照 API 将渲染结果与之前保存的快照进行比较
    expect(asFragment()).toMatchSnapshot();
  });
});
