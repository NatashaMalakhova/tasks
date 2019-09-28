const dnkToRnk = (dnk) => {
    let rnk = '';
    
    if (typeof dnk !== 'string' ) throw new Error ('Ошибка типа данных');
    if (dnk === '' ) throw new Error ('Ошибка. Пустая строка');
    
    for (let i = 0; i < dnk.length; i++) {
        if (dnk[i] === 'G') {
            rnk += 'C';
        } else if (dnk[i] === 'C') {
            rnk += 'G';
        } else if (dnk[i] === 'T') {
            rnk += 'A';
        } else if (dnk[i] === 'A') {
            rnk += 'U';
        } else {
             throw new Error ('Ошибка ввода строки, неправильные данные или лишние символы');
        }
    }
    return rnk;
  }