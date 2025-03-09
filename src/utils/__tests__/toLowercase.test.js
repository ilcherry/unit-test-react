import { toLowercase } from "../toLowercase";

describe("toLowercase", () => {
  it("should convert a string to lowercase", () => {
    expect(toLowercase("HELLO")).toBe("hello");
  });

  it("should return an empty string if input is an empty string", () => {
    expect(toLowercase("")).toBe("");
  });

  it("should handle mixed case strings", () => {
    expect(toLowercase("HeLLo WoRLd")).toBe("hello world");
  });

  it("should handle strings with numbers and special characters", () => {
    expect(toLowercase("Hello123!")).toBe("hello123!");
  });

  it("should throw an error if input is not a string", () => {
    expect(() => toLowercase(123)).toThrow();
    expect(() => toLowercase(null)).toThrow();
    expect(() => toLowercase(undefined)).toThrow();
  });
});
