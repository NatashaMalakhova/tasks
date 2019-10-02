const substr = (str, index = 0, l = str.length) => {
  let startIndex = (index < 0) ? 0 : index;
  let newLength = (l < 0) ? 1 : 
    ((index + l - 1) < str.length) ? l :
    str.length;

  if (index > str.length || l === 0) {
    return '';
  }
  return str.split("").slice(startIndex, startIndex + newLength).join("");
};
export default substr;