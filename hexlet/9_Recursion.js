const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin > end) {
      return NaN;
    }
    if (begin === end) {
        return begin;
    }
    else {
      return begin + sequenceSum(begin + 1, end);
    } 
    // END
  };
  
  export default sequenceSum;
  