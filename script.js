// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max - min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
    return list[randomInt(0, list.length - 1)]

}
// Write password to the #password input
function generatePassword() {

    var userInport = window.prompt("How long do you want your password to be?")

    var passwordLength = parseInt(userInport)
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

    var optionsList = []

    if (userWantsNumbers === true) {
        optionsList.push(numberList)
    }

    if (userWantsSymbols === true) {
        optionsList.push(symbolList)
    }

    if (userWantsLowercase === true) {
        optionsList.push(lowerCaseList)
    }

    if (userWantsUppercase === true) {
        optionsList.push(upperCaseList)
    }

    if (optionsList.length === 0) {
        optionsList.push(lowerCaseList)
    }

    var generatePassword = ""

    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandomItem(optionsList)
        var randomChar = getRandomItem(randomList)
        generatePassword += randomChar
    }

    console.log(generatePassword)
    return generatePassword
}


// Write password to the #password Input 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


