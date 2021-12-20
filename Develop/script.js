// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Everything I've added:

//Syncs "Number of Characters slider with text input"
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeLowercaseElement = document.getElementById('includeLowercase')
const includeNumericElement = document.getElementById('includeNumeric')
const includeSpecialElement = document.getElementById('includeSpecial')
const UppercaseCharCodes = arrayFromLowToHigh(65, 90)
const LowercaseCharCodes = arrayFromLowToHigh(97, 122)
const NumericCharCodes = arrayFromLowToHigh(48, 57)
const SpecialCharCodes = arrayFromLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

form.addEventListener('submit', e => {e.preventDefault
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercase.checked
  const includeLowercase = includeLowercase.checked
  const includeNumeric = includeNumeric.checked
  const includeSpecial = includeSpecial.checked
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumeric, includeSpecial)
})

function generatePassword(characterAmount, includeUppercase, includeNumeric, includeSpecial) {
  let charCodes = LowercaseCharCodes
  if (includeUppercase) charCodes = charCodes.concat(UppercaseCharCodes)
  if (includeNumeric) charCodes = charCodes.concat(NumericCharCodes)
  if (includeSpecial) charCodes = charCodes.concat(SpecialCharCodes)

  const passwordCharacters = []
  for (i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i) 
  }
  return array
}


