module.exports = function toReadable (number) {
let result;
const firstArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const secondArr = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const thirdArr = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const numberString = number.toString();

if (number < 10) {
  result = firstArr[number];
 } else if (numberString.length == 2 && numberString[1] == 0) {
  result = thirdArr[numberString[0]];
} else if (numberString.length == 2 && number > 10 && number < 20) {
  result = secondArr[numberString[1]];
} else if (numberString.length == 2 && number > 20) {
  result = thirdArr[numberString[0]] + ' ' + firstArr[numberString[1]];
} else if (numberString.length == 3 && numberString[1] == 1 && numberString[2] == 0) {
  result = firstArr[numberString[0]] + ' hundred ten';
} else if (numberString.length == 3 && numberString[1] == 0 && numberString[2] == 0) {
  result = firstArr[numberString[0]] + ' hundred';
} else if (numberString.length == 3 && numberString[1] == 1 && numberString[2] !== 0) {
  result = firstArr[numberString[0]] + ' hundred ' + secondArr[numberString[2]];
} else if (numberString.length == 3 && numberString[1] !== 0 && numberString[2] == 0) {
  result = firstArr[numberString[0]] + ' hundred ' + thirdArr[numberString[1]];
} else if (numberString.length == 3 && numberString[1] == 0 && numberString[2] !== 0) {
  result = firstArr[numberString[0]] + ' hundred ' + firstArr[numberString[2]];
} else {
  result = firstArr[numberString[0]] + ' hundred ' + thirdArr[numberString[1]] + ' ' + firstArr[numberString[2]]
}
return result;
}