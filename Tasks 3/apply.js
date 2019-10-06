const apply = (iterations, fun, value) => {
  if (typeof fun !== 'function') throw new TypeError ('No function.');
  if (value === undefined) throw new Error ('Argument for function not passed.');
  if (typeof iterations !== 'number') throw new TypeError ('The number of iterations must be of type "Number".');
  if (iterations < 0) throw new Error ('The number of iterations is negative.');
  if (Number.isInteger(iterations) === false) throw new Error ('The number of iterations cannot be a fractional number.');

  if (iterations === 0) return value;
  return apply(iterations - 1, fun, fun(value));
};

export default apply;
