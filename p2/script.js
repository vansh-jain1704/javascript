const prompt = require("prompt-sync")();
let str = prompt("Enter a sentence containing JavaScript"); 

console.log("Length of string:", str.length); 
 
let word = str.substring(str.indexOf("JavaScript"), str.indexOf("JavaScript") + 10); 
console.log("Extracted word:", word); 
  
let newStr = str.replace("JavaScript", "Python"); 
console.log("New String:", newStr); 
 
 
function isPalindrome(s) { 
  let reversed = s.split("").reverse().join(""); 
  return s === reversed; 
} 
 
 
let check = prompt("Enter a word to check palindrome"); 
if(isPalindrome(check)){ 
  console.log(check + " is a Palindrome"); 
}else{ 
  console.log(check + " is Not a Palindrome"); 
}

npm install prompt-sync
