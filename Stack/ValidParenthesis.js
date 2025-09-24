/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let openingBrackets = ["(", "{", "["];
  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top === "[" && s[i] !== "]") ||
        (top === "(" && s[i] !== ")") ||
        (top === "{" && s[i] !== "}")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
