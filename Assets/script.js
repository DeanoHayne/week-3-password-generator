// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

    var userInport = window.prompt("How long do you want your password to be?")

    var passwordLength = parseInt(userInput)
    if (isNaN(passwordLength)) {
        window.alert("That is not a number!")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    }

    var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
    var userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
    var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
    var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");

    var symbolList = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '*', '+'];
    var lowerCaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCaseList = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numberList = ['1', '2', '3', '3', '4', '5', '6', '6', '7', '8', '9', '0'];

    // 1. Prompt the user for the password 
    // a. Password length 8 to 128
    // b. Lowercase, uppecase, numbers, special characters
    // 2. Vaildate the input
    // 3.Generate password based on criteria
    // 4. Generate password to the page





}
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

{ }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


