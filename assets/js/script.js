// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add generate password function
function generatePassword() {
  //declare variables to be the input of the user
  var characters = prompt("How many characters? (8-128)");
  var isLower = confirm("Would you like lowercase letters?");
  var isUpper = confirm("Would you like uppercase letters?");
  var isNum = confirm("Would you like numbers?");
  var isSpecial = confirm("Would you like special characters?");
  //declare password variable as an empty string
  var pass = "";
  var passArray = [];
  var arrLower = "abcdefghijklmnopqrstuvwxyz".split("");
  var arrUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var arrNum = "0123456789".split("");
  var arrSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

  //if statements to see what to add to the password array
  //if they want lowercase, add lowercase
  if (isLower) {
    passArray = passArray.concat(arrLower);
  }
  // if they want uppercase, add uppercase
  if (isUpper) {
    passArray = passArray.concat(arrUpper);
  }
  //if they want numbers, add numbers
  if (isNum) {
    passArray = passArray.concat(arrNum);
  }
  //if they want special characters, add special characters
  if (isSpecial) {
    passArray = passArray.concat(arrSpecial);
  }
  //for loop to go through each character of the password and fill it with an element
  for (i = 0; i < characters; i++) {
    //make a variable that will be a random index number of the password array
    var x = Math.floor(Math.random() * passArray.length);
    //add the character at the x index to the pass variable
    pass += passArray[x];
  }

  return pass;
}
