const add = function(a,b) {
	c = a + b;
  return c;
};

const subtract = function(a,b) {
	c = a - b;
  return c;
};

const sum = function(numList) {
  total = 0;
	for (var i = 0, j = numList.length; i < j; i++) {
    total = total + Number(numList[i])
  }
  return total;
};

const multiply = function(numList) {
  total = 1
  for (var i = 0, j = numList.length; i < j; i++) {
    total = total * Number(numList[i])
  }
  return total;
};

const power = function(a,b) {
	c = Math.pow(a,b);
  return c;
};

const factorial = function(a) {
	total = 1;
  for (var i = a; i > 0; i--) {
    total = total * i;
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
