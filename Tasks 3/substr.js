const substr = (str, startIndex, substrLength) => {
  if (str === undefined) throw new Error ('The string is not defined.');
  if (startIndex === undefined ) startIndex = 0;
  if (substrLength === undefined) substrLength = str.lenght;

  str = String(str);

  let newStartIndex = (startIndex < 0) ? 0 : startIndex;
  let newSubstrLength = (substrLength < 0) ? 1 : 
    ((startIndex + substrLength - 1) < str.length) ? substrLength :
    str.length;

  if (startIndex > str.length || newSubstrLength === 0) return '';
  
  return str.split('').slice(newStartIndex, newStartIndex + newSubstrLength).join('');
};

export default substr;