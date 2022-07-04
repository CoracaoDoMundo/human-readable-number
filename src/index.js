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

/*
else if (numberString.length == 3 && numberString[2] == 0) {
  result = firstArr[numberString[0]] + ' hundred ' + secondArr[numberString.slice(1)];
} 
else if (numberString.length == 3 && numberString[1] == 0) {
  result = firstArr[numberString[0]] + ' hundred ' + firstArr[numberString[2]];
} 
else if (numberString.length == 3 && numberString[1] == 1) {
  result = firstArr[numberString[0]] + ' hundred ' + firstArr[numberString[1] + numberString[2]];
} 
else if (numberString.length == 3 && numberString[1] !== 0 && numberString[1] !== 1 & numberString[2] !== 0) {
  result = firstArr[numberString[0]] + ' hundred ' + secondArr[numberString[1]] + ' ' + firstArr[numberString[2]];
}*/

  /* let result;
    let x = number;
    let y;

  if (length(x) == 1) {
    switch (x) {
        case 0: x = 'Zero';
        case 1: x = 'One';
        case 2: x = 'Two';
        case 3: x = 'Three';
        case 4: x = 'Four';
        case 5: x = 'Five';
        case 6: x = 'Six';
        case 7: x = 'Seven';
        case 8: x = 'Eight';
        case 9: x = 'Nine';
      }
      return result = x;
    }
   else if (length(number) == 2 && number[-1] == 0) {
    switch (x[-1]) {
        case 1: y = 'Ten';
        case 2: y = 'Twenty';
        case 3: y = 'Thurty';
        case 4: y = 'Fourty';
        case 5: y = 'Fifty';
        case 6: y = 'Sixty';
        case 7: y = 'Seventy';
        case 8: y = 'Eighty';
        case 9: y = 'Ninety';
      } 
      return result = y;
    }
    else if (length(number) == 2 && number[0] == 1 && number [-1] !== 0) {
    switch (number) {
        case 11: z = 'Eleven';
        case 12: z = 'Twelve';
        case 13: z = 'Thirteen';
        case 14: z = 'Fourteen';
        case 15: z = 'Fifteen';
        case 16: z = 'Sixteen';
        case 17: z = 'Seventeen';
        case 18: z = 'Eighteen';
        case 19: z = 'Nineteen';
      }
      return result = z;
   }
   else if (length(number) == 2 && number[0] !== 1 && number[-1] !== 0) {
    result = `${y} + ' ' + ${x}`;
    return result;
   }
   else if (length(number) == 3){
    result = `${x} + ' hundred ' + ${y}`;
}
let i = 999;
let result = '';
let x;
let y;

switch (number[-1]) {
    case 0: x = 'Zero';
    case 1: x = 'One';
    case 2: x = 'Two';
    case 3: x = 'Three';
    case 4: x = 'Four';
    case 5: x = 'Five';
    case 6: x = 'Six';
    case 7: x = 'Seven';
    case 8: x = 'Eight';
    case 9: x = 'Nine';
  }

switch (length(number) == 2 && number[-1] == 0) {
        case 1: y = 'Ten';
        case 2: y = 'Twenty';
        case 3: y = 'Thurty';
        case 4: y = 'Fourty';
        case 5: y = 'Fifty';
        case 6: y = 'Sixty';
        case 7: y = 'Seventy';
        case 8: y = 'Eighty';
        case 9: y = 'Ninety';
      } 
   
    else if (length(number) == 2 && number[0] == 1 && number [-1] !== 0) {
    switch (number) {
        case 11: z = 'Eleven';
        case 12: z = 'Twelve';
        case 13: z = 'Thirteen';
        case 14: z = 'Fourteen';
        case 15: z = 'Fifteen';
        case 16: z = 'Sixteen';
        case 17: z = 'Seventeen';
        case 18: z = 'Eighteen';
        case 19: z = 'Nineteen';
      }
     result = z;

while (i >= 0) {

if (length(number) == 3){
    result = `${x} + ' hundred ' + ${y}`; 
}

    i = i - 1;
}
return result;*/

