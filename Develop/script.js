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

 var includeLowerCase = prompt("Do you want to include lowercase characters?").trim();
var includeUpperCase = prompt("Do you ant to include upper case?").trim();

var includeSpecialCharacters = prompt("Do you want to include special characters?").trim();

var includeNumbers= prompt("Do you want to include numbers?").trim();

var passwordLength = Number(prompt("How many characters would you like your password to include?")).trim();
//include logic for handling user input for lengths less than 8 and greater than 128

//include placeholder text specifying length requirements
alert.placeHolder("Password must be between 8 and 128 characters!");
<input type="text" placeholder="Password must be between 8 and 128 characters!" name="todo-text" id="todo-text" />


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


//randomize the password based on the input, if 25 char randomly select 25 times. for loop statement 

//1.create String variable that is empty (eg. password)
//2.For each character within user specified password length
  var i;
  for (i = 0; i < passwordLength; i++) {
    //3.Add a random character from includedSelection to your string
    //stringName += includedSelection[Math.random() % includedSelection.length];
  }
  //return your string
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
