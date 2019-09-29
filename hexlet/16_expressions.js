// BEGIN (write your solution here)
const square = (a) => {
    return a * a;
  };
  const sumOfSquares = (a, b) => {
    return square(a) + square(b);
  };
  const squareSumOfSquares = (a, b) => {
    return square(sumOfSquares(a, b));
  };
  // END
  
  export default {
    square,
    sumOfSquares,
    squareSumOfSquares,
  };
  