const apply = (iterationsOfFunction, nameOfFunction, argumentOfFunction) => {
  if (iterationsOfFunction < 0) throw new Error ('Отрицательное число итераций');

  if (iterationsOfFunction === 0) {
    return argumentOfFunction;
  }
  return apply(iterationsOfFunction - 1, nameOfFunction, nameOfFunction(argumentOfFunction));
};

export default apply;