// Read string from user 
let str = prompt("Enter a sentence containing JavaScript"); 
 
// 1. Find length of string 
console.log("Length of string:", str.length); 
 
// 2. Extract the word "JavaScript" 
let word = str.substring(str.indexOf("JavaScript"), str.indexOf("JavaScript") + 10); 
console.log("Extracted word:", word); 
 
// 3. Replace one word with another 
let newStr = str.replace("JavaScript", "Python"); 
console.log("New String:", newStr); 
 
// 4. Palindrome function 
function isPalindrome(s) { 
  let reversed = s.split("").reverse().join(""); 
  return s === reversed; 
} 
 
// Example check 
let check = prompt("Enter a word to check palindrome"); 
if(isPalindrome(check)){ 
  console.log(check + " is a Palindrome"); 
}else{ 
  console.log(check + " is Not a Palindrome"); 
}
