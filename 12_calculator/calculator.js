const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
  let fin = 1;
	while (b--) {
    fin *= a;
  }
  return fin;
};

const factorial = function(a) {
	let total = 1;
  for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
