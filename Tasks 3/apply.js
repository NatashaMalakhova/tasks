const apply = (iterationsOfFunction, nameOfFunction, argumentOfFunction) => {
  if (typeof nameOfFunction !== 'function') throw new TypeError ('No function.');
  if (argumentOfFunction === undefined) throw new Error ('Argument for function not passed.');
  if (typeof iterationsOfFunction !== 'number') throw new TypeError ('The number of iterations must be of type "Number".');
  if (iterationsOfFunction < 0) throw new Error ('The number of iterations is negative.');
  if (Number.isInteger(iterationsOfFunction) === false) throw new Error ('The number of iterations cannot be a fractional number.');

  if (iterationsOfFunction === 0) return argumentOfFunction;
  return apply(iterationsOfFunction - 1, nameOfFunction, nameOfFunction(argumentOfFunction));
};

export default apply;