// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Arrays
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowerLetterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const charArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Write password to the #password input
// Replaces "your secure password" with generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The function generatePassword() should run with a series of prompts for password criteria
function generatePassword () {
  var finalPassword = "";
  var passwordContent = [];
  // Prompt for number of characters and store in variable "passLength"
  var userLength = prompt("How many characters do you want your password to be? Please choose between 8 and 128 characters.");
    var passLength = parseInt(userLength);
    if (passLength < 8 || passLength > 128) {
      alert("Please choose a number between 8 and 128.");
      return
    } 

  // Prompt for lowercase letters; if user selects true, then for each item in the lowercase array, assign it an index?
  var wantLowercase = confirm("Do you want lowercase letters in your password?");
    if (wantLowercase == true) {
      for (let i = 0; i < lowerLetterArray.length; i++) {
        passwordContent.push(lowerLetterArray[i]);
      }
      console.log("The user chose to include lowercase letters.")
    }

  // Uppercase letters
  var wantUppercase = confirm("Do you want uppercase letters in your password?");
    if (wantUppercase == true) {
      for (let i = 0; i < upperLetterArray.length; i++) {
        passwordContent.push(upperLetterArray[i]);
      }
    console.log("The user chose to include uppercase letters.")
    }
  
  // Numbers
  var wantNumbers = confirm("Do you want numbers in your password?");
    if (wantNumbers == true) {
      for (let i = 0; i < numArray.length; i++) {
        passwordContent.push(numArray[i])
      }
    console.log("The user chose to include numbers.")
    }

  // Special characters
  var wantSpecial = confirm("Do you want special characters in your password?");
    if (wantSpecial == true) {
      for (let i = 0; i < charArray.length; i++) {
        passwordContent.push(charArray[i])
      }
      console.log("The user chose to include special characters.")
    }



// Using userNumber and responses from prompts above, generate randomized password
for (var i = 0; i < passLength; i++) { // for each character within the length that the user designated
  var randomChar = passwordContent[Math.floor(Math.random() * passwordContent.length)];
  console.log("The password content array is: " + passwordContent)
  finalPassword = finalPassword + randomChar;
}
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);