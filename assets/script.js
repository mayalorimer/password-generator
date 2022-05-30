// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    // Prompts user for password length
    let passLength = prompt("How long do you want the password to be?");
    
    // Checks the length given to determine if it is valid
    if (passLength < 8) {
      window.alert("Length is too short");
      writePassword();
    }
    else if (passLength > 128) {
      window.alert("Length is too long");
      writePassword();
    }

    // asks for special characters
    var characters = window.confirm("Do you want to include special characters?");

    //asks for lowercase
    var lowercase = window.confirm("Do you want to include lowercase?");

    //asks for uppercase
    var uppercase = window.confirm("Do you want to include uppercase?");

    //asks for numeric
    var numbers = window.confirm("Do you want to include numbers?");

    //checks that at least one condition is confirmed
    if (!characters && !lowercase && !uppercase && !numbers){
      window.alert("At least one character type must be included. Please start over.");
      writePassword(); 
    }

    // sets arrays for the characters that may be included
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var special = "!@#$%^&*_-+=";

    var possibleChar = "";

    // if statements to add the included characters into the array of potential characters for the password
    if (characters) {
      possibleChar = possibleChar.concat(special); 
    }
    if (lowercase) {
      possibleChar = possibleChar.concat(lower); 
    }
    if (uppercase) {
      possibleChar = possibleChar.concat(upper); 
    }
    if (numbers) {
      possibleChar = possibleChar.concat(num); 
    }

    var password = "";

    //loops through the length to create the password
    for (var i = 0; i < passLength; i++) {
      password += possibleChar[Math.floor(Math.random()*(possibleChar.length))];
    }
  
    return(password); 

  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
