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
 var includedSelection = [];

 var includeLowerCase = confirm("Do you want to include lowercase characters?");
if (includeLowerCase == true) {
  includedSelection.push(lowerChar)
}

var includeUpperCase = confirm("Do you want to include upper case?");
if (includeUpperCase == true) {
    includedSelection.push(upperChar);
}

var includeSpecialCharacters = confirm("Do you want to include special characters?");
if (includeSpecialCharacters == true) {
  includedSelection.push(SpecialChar)
}

var includeNumbers = confirm("Do you want to include numbers?");
if (includeNumbers == true) {
  includedSelection.push(numChar)
}


var passwordLength = Number(prompt("How many characters would you like your password to include?").trim());
console.log("Password length before loop: "+ passwordLength);
while(passwordLength < 8 || passwordLength > 128) {
  // console.log("Password length before first loop prompt: "+ passwordLength);
  alert("Password must be between 8 and 128 characters!")
  passwordLength = Number(prompt("How many characters would you like your password to include?").trim());
  
} 

// var passwordText = document.querySelector("#password")
// passwordText.value = password;
// console.log(includedSelection);
var newPassword = "";

var i;
  for (i = 0; i < passwordLength; i++) {
    var randomSelection = Math.floor(Math.random()*1000) % includedSelection.length;
    var randomIndex = includedSelection[randomSelection].length; 
    newPassword += includedSelection[randomSelection][Math.floor(Math.random()*1000) % randomIndex];
  }


  return newPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
