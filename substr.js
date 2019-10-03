const substr = (str, startIndex = 0, substrLength = str.length) => {
  let newStartIndex = (startIndex < 0) ? 0 : startIndex;
  let newSubstrLength = (substrLength < 0) ? 1 : 
    ((startIndex + substrLength - 1) < str.length) ? substrLength :
    str.length;

  if (startIndex > str.length || newSubstrLength === 0) {
    return '';
  }
  return str.split('').slice(newStartIndex, newStartIndex + newSubstrLength).join('');
};
export default substr;