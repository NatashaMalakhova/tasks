// BEGIN (write your solution here)
const smallestDivisor = (num) => {
    let del = 2;
  
   if (num < 1) {
      return NaN;
    } 
    if (num === 1) {
      return num;
    }
    
    while (num % del !== 0) {
      del = del + 1;
    }
    return del;
  };
  
  // END
  
  export default smallestDivisor;
  