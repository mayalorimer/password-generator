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
    }
    else if (passLength > 128) {
      window.alert("Length is too long");
    }

    // asks for special characters
    var characters = window.confirm("Do you want to include special characters?");
    console.log(characters);

    //asks for lowercase
    var lowercase = window.confirm("Do you want to include lowercase?");
    console.log(lowercase);

    //asks for uppercase
    var uppercase = window.confirm("Do you want to include uppercase?");
    console.log(uppercase);

    //asks for numeric
    var numbers = window.confirm("Do you want to include numbers?");
    console.log(numbers);

  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);