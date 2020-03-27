// Assignment Code
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //random number between 0-25
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //random number between 0-25
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var SpecialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;

}

function generatePassword() {

 var includeLowerCase = prompt("Do you want to include lowercase characters?");
var includeUpperCase = prompt("Do you ant to include upper case?");

var includeSpecialCharacters = prompt("Do you want to include special characters?");

var includeNumbers= prompt("Do you want to include numbers?");

var passwordLength = Number(prompt("How many characters would you like your password to include?"));

var includedSelection =[];

if (includeUpperCase.toLowerCase() === "yes") {
  includedSelection.push(upperChar)
}
if (includeLowerCase.toLowerCase() === "yes") {
  includedSelection.push(lowerChar)
}
if (includeSpecialCharacters.toLowerCase() === "yes") {
  includedSelection.push(SpecialChar)
}
if (includeNumbers.toLowerCase() === "yes") {
  includedSelection.push(numChar)
}
// console.log(includedSelection);
}

//randomize the password based on the input, if 25 char randomly select 25 times. for loop statement 
var i;
for (i = 0; i > 7 && i < 127; i++) {
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
