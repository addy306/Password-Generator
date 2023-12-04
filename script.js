// DOM elements
var lengthLabel = document.querySelector('#length');
var upperCaseBox = document.querySelector('#uppercase');
var lowerCaseBox = document.querySelector('#lowercase');
var numbersBox = document.querySelector('#numbers');
var symbolsBox = document.querySelector('#symbols');

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Functions for getting a random element from each array

// Uppercase function
function getUppercase() {
  return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
}

// Lowercase function
function getLowercase() {
  return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
}

// Number function
function getNumber() {
  return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
}

// Symbol function
function getSymbol() {
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

// Password options configuration
var passwordOptions = [
  { field: upperCaseBox, getChar: getUppercase },
  { field: lowerCaseBox, getChar: getLowercase },
  { field: numbersBox, getChar: getNumber },
  { field: symbolsBox, getChar: getSymbol }
];

// Function to get Password length value and validate Password Length
function getPasswordOptions() {
    // Prompt for password length
    let passwordLength = parseInt(lengthLabel.value);

    // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length. Please enter a number between 8 and 128.');
    return;
}
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {// DOM elements
  var lengthLabel = document.querySelector('#length');
  var upperCaseBox = document.querySelector('#uppercase');
  var lowerCaseBox = document.querySelector('#lowercase');
  var numbersBox = document.querySelector('#numbers');
  var symbolsBox = document.querySelector('#symbols');
  
  // Arrays of character sets
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  // Password options configuration
  var passwordOptions = [
      { field: upperCaseBox, getChar: getUppercase },
      { field: lowerCaseBox, getChar: getLowercase },
      { field: numbersBox, getChar: getNumber },
      { field: symbolsBox, getChar: getSymbol }
  ];
  
  // Functions for getting a random element from each array
  function getUppercase() {
      return upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  }
  
  function getLowercase() {
      return lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  }
  
  function getNumber() {
      return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }
  
  function getSymbol() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }
  
  // Function to generate password with user input
  function generatePassword() {
      var length = parseInt(lengthLabel.value);
  
      // Validate password length
      if (isNaN(length) || length < 8 || length > 128) {
          alert('Invalid password length. Please enter a number between 8 and 128.');
          return '';
      }
  
      let generatedPassword = '';
      const typeArray = passwordOptions.filter(({ field }) => field.checked);
  
      // Check if no checkboxes are selected
      if (typeArray.length === 0) {
          alert('Please select at least one character type.');
          return ''; // Return an empty string to indicate an error
      }
  
      for (let i = 0; i < length; i++) {
          const index = Math.floor(Math.random() * typeArray.length);
          const letter = typeArray[index].getChar();
          generatedPassword += letter;
      }
      return generatedPassword;
  }
  
  // Get reference to the #generate button
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector('#password');
  
      passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  var options = getPasswordOptions();

  // Create an array to store all possible characters based on user input
  var possibleCharacters = [];
  if (options.addLowerCaseChars) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (options.addUpperCaseChars) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  if (options.addNumericChars) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (options.addSpecialChars) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Check if the user didn't select any character type
  if (possibleCharacters.length === 0) {
    alert('No character types selected. Please try again.');
    return '';
  }

  // Generate the password by randomly selecting characters
  var password = '';
  for (let i = 0; i < options.length; i++) {
    password += getRandom(possibleCharacters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);