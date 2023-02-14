// 1. Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function reverse(str) {
    var rev = "";
    number = parseInt(str);
    for (; number > 0;) {
      rev += number % 10;
      number = Math.floor(number / 10)
    }
    return rev;
  }

let x = 32243;

console.log(reverse(x.toString()));