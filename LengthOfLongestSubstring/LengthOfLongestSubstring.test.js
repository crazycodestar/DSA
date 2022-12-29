const lengthOfLongestSubString = require("./LengthOfLongestSubstring");

describe("lengthOfLongestSubString", () => {
  it("abcabcbb", () => {
    const result = lengthOfLongestSubString("abcabcbb");
    expect(result).toBe(3);
  });
  it("bbbbb", () => {
    const result = lengthOfLongestSubString("bbbbb");
    expect(result).toBe(1);
  });
  it("pwwkew", () => {
    const result = lengthOfLongestSubString("pwwkew");
    expect(result).toBe(3);
  });
})
