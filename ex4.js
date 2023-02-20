// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

function num_of_digits(num) {
    return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

console.log(num_of_digits(1234));