// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;
}
const lowerCaseArray = ["abcdefghijklmnopqrstuvwxyz"];
const upperCaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numericalArray = ["1234567890"];
const specialArray = ["!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
var createdPassword = " "
// Add event listener to generate button
generateBtn.addEventListener("click", function() {
// get input
let passwordLengthInitial = prompt(
  "How many characters would you like your password to be?"
);

let passwordLength = passwordLengthInitial; //get's password length and sets it to a number
if (passwordLength > 8 && passwordLength < 128) {
  const myArr = [];
  let lowerCase = confirm("Do you want lowercase characters?");
  lowerCase ? myArr.push(lowerCaseArray) : null;
  let upperCase = confirm("Do you want uppercase characters");
  upperCase ? myArr.push(upperCaseArray) : null;
  let numerical = confirm("Do you want numerical characters");
  numerical ? myArr.push(numericalArray) : null;
  let specialCharacters = confirm("Do you want special characters");
  specialCharacters ? myArr.push(specialArray) : null;
  console.log(specialCharacters);
  var myString = myArr.toString()
  console.log(myString)
  for (var i = 1; i < passwordLength; i++) {
     createdPassword += myString[Math.floor(Math.random() * myString.length) +1];
  }
  console.log(createdPassword);
  console.log(createdPassword.length)
  alert(createdPassword);
  document.getElementById('finalPassword').innerHTML = createdPassword;
} else {
  alert("Please enter a number between 8 and 128"); //checked
  alert(`your password length is ${passwordLength}`);
}
});