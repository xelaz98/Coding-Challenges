// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function reverse(s){
    return s.split("").reverse().join("");
}

let x = "madam";

console.log(reverse(x) == x);