const convertToCelsius = function(num) {
  var converted = (num - 32) * (5/9);
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(num) {
  var converted = num * 1.8 + 32;
  return Math.round(converted * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
