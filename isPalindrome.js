const isPalindrome = (str) => {
    if (str === '') throw new Error ('There is no data. The empty string.');
    if (str === undefined) throw new Error (' is not defined.');

    str = String(str).toLowerCase().replace(/[/.,!?;_’%:\s/\-/\–/\—/]*/g, '');
    
    const result = (strNew) => {
        let firstIndex = strNew[0];
        let lastIndex = strNew[strNew.length - 1];
        if (strNew.length <= 1) return true;
        if (firstIndex !== lastIndex) return false;

        return result(strNew.slice(1, -1));
    };
    return result(str); 
};

export default isPalindrome;