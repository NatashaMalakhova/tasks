import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (str[i] !== ' ' && (str[i - 1] === ' ' || i === 0 )) {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};
export default solution;
// END
