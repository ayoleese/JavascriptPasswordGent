// Assignment Code

// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


var generateBtn = document.querySelector("#generate");
var charLength
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '=', '+', '/', '<', '>', '?', '[', ']'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randomPass = numberChar + specialChar + lowerCase + upperCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  for (var i = 0; i < charLength; i++) {
    var randomIndex = Math.floor(Math.random() * randomPass.length);
    password +=  randomPass.charAt(randomIndex);
  }
  // if (passwordText) {
  //   passwordText.value = password;
  // }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//QUESTIONS AND PROMPTS ARE DONE 43-70
function generatePassword() {
  charLength = parseInt(prompt("How many characters you want your password to be? Enter a number between 8-128."));

  //( if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
  // alert("//");
  // return;) ----- sums up the if's below

  //if person picked less than 8 characters in their password
  if (charLength < 8){
  alert("Please pick any number more than 8")
  return
}
//if person picked a character higher than 128
  if (charLength > 128){
  alert("Please pick any number no more than 128")
  return
}
// console.log(typeof charLength)
// console.log(isNaN(charLength)) --> isNaN-is Not a Number
// rejects if the person didn't enter a number between what was asked
  if (isNaN(charLength)){
  alert("Please pick a number")
  return
}
var numberChoice = confirm("Click OK if you like numbers in your password")
//console.log(numberChoice)
var lowerCaseChoice = confirm("Click OK if you want your password to contain lower case letters")
//console.log(lowerCaseChoice)
var upperCaseChoice = confirm("Click OK if you want your password to contain UPPER case letters")
//console.log(upperCaseChoice)
var specialChoice = confirm("Click OK if you want special characters in your password")
//console.log(specialChoice)

  return password;
}
