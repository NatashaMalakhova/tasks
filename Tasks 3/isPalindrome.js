const isPalindrome = (str) => {
  if ((str === '') || (str === undefined)) {
    throw new Error ('No data transferred.')
  };

  str = String(str).toLowerCase().replace(/[/.,!?;_’%:\s/\-/\–/\—/]*/g, '');
  if (str.length === 0) throw new Error ('No data.');
  if (str.length === 1) return true;

  const result = (str) => {
    let firstIndex = str[0];
    let lastIndex = str[str.length - 1];
    if (str.length <= 1) return true;
    if (firstIndex !== lastIndex) return false;

    return result(str.slice(1, -1));
  };
  return result(str); 
};

export default isPalindrome;  
