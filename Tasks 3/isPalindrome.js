const isPalindrome = (str) => {
  if (str === '') throw new Error ('There is no data. The empty string.');
  if (str === undefined) throw new Error ('The string is not defined.');

  str = String(str).toLowerCase().replace(/[/.,!?;_’%:\s/\-/\–/\—/]*/g, '');
    
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