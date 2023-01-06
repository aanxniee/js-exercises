const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s = s + arr[i];
  }

  return s;
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let s = arr[0];
  for (let i = 1; i < arr.length; i++) {
    s = s * arr[i];
  }

  return s;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  return a*factorial(a-1);
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
