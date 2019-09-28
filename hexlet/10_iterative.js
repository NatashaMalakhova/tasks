const smallestDivisor = (num) => {
    // BEGIN (write your solution here)
    const f = (index) => {
      if (index > num/2) {
        return num;
      }
      if (num%index === 0) {
      return index;
    }
      return f(index+1); 
    };
  
    return f(2);
  
    // END
  };
  
  export default smallestDivisor;
  