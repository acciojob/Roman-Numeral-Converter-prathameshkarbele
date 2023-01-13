const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

function convertToRoman(num) {
  let result = "";
  let numbers = Object.keys(romanNumerals).map(Number).sort((a, b) => b - a);
  for (let i = 0; i < numbers.length; i++) {
    while (num >= numbers[i]) {
      result += romanNumerals[numbers[i]];
      num -= numbers[i];
    }
  }
  return result;
}
console.log(convertToRoman(798)) 
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
