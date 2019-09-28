const dnkToRnk = (dnk) => {
    let rnk = '';
    
    if (dnk === '' ) {
        return '';
    }
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
             alert('Ты ввёл данные не верно. Попробуй ещё раз.')
             return;
        }
    }
    return rnk;
  }