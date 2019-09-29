import square from './square';

// BEGIN (write your solution here)
import {getTriangleArea} from './myMathModule';
const gerTriagleAreaNew = (n) => {
  return 1 / 2 * n * (square(n) / 2);
  
};
export default gerTriagleAreaNew;
// END
