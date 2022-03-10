var characterLength = 8;
var choiceArr = [];
var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '*', '+'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '3', '4', '5', '6', '6', '7', '8', '9', '0'];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    console.log("You clicked the button");

    // 1. Prompt the user for the password 
    // a. Password length 8 to 128
    // b. Lowercase, uppecase, numbers, special characters
    // 2. Vaildate the input
    // 3.Generate password based on criteria
    // 4. Generate password to the page



    return "Generated password will return here";

}
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
