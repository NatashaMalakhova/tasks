const isPalindrome = (str) => {
    if (str === '') throw new Error ('Ошибка. Пустая строка');
    strNew = String(str).toLowerCase();
    if (strNew.length < 1) return true;
    let strReverse = strNew.split('').reverse().join('');
    if (strReverse === strNew) return true;
    return false;
};

export default isPalindrome;