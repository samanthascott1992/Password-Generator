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

 var includeLowerCase = confirm("Do you want to include lowercase characters?");
var includeUpperCase = confirm("Do you want to include upper case?");
var includeSpecialCharacters = confirm("Do you want to include special characters?");
var includeNumbers= confirm("Do you want to include numbers?");



var passwordLength = Number(prompt("How many characters would you like your password to include?").trim());
console.log("Password length before loop: "+ passwordLength);
while(passwordLength < 8 || passwordLength > 128) {
  // console.log("Password length before first loop prompt: "+ passwordLength);
  alert("Password must be between 8 and 128 characters!")
  passwordLength = Number(prompt("How many characters would you like your password to include?").trim());
  
} 
var includedSelection =[];
if (includeUpperCase === "yes") {
    includedSelection.push(upperChar);
}
if (includeLowerCase === "yes") {
  includedSelection.push(lowerChar)
}
if (includeSpecialCharacters === "yes") {
  includedSelection.push(SpecialChar)
}
if (includeNumbers === "yes") {
  includedSelection.push(numChar)
}

var passwordText = document.querySelector("#password")
passwordText.value = password;

  var i;
  for (i = 0; i < passwordLength; i++) {
    var randomSelection = Math.floor(Math.random()*1000) % includedSelection.length;
    password += includedSelection[randomSelection][Math.floor(Math.random()*1000) % includedSelection[randomSelection].length];
  }
  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
