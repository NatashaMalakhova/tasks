/* eslint-disable no-console */

const pi = 3.14; // eslint-disable-line

// BEGIN (write your solution here)
const weight = 64;
const c = 300000000;

const energy = weight * c * c;
// END

export default energy;
console.info(`Your body energy is ${energy} joules. This is 1 / ${Math.round(389000000000000000000 / energy)} of the yearly world energy consumption. Woah!`);
