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

// Function to prompt user for password options
function getPasswordOptions() {
    // Prompt for password length
    let passwordLength = parseInt(prompt('Enter the length of the password (between 8 and 128 characters):'));

    // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password length. Please enter a number between 8 and 128.');
    return;
}

   // Prompt for character types
   let addLowerCaseChars = confirm('Do you want lowercase letters ? ' + 'Click Ok for Yes and Cancel for No');
   let addUpperCaseChars = confirm('Do you want uppercase letters ? ' + 'Click Ok for Yes and Cancel for No');
   let addNumericChars = confirm('Do you want numeric letters ? ' + 'Click Ok for Yes and Cancel for No');
   let addSpecialChars = confirm('Do you want special characters? ' + 'Click Ok for Yes and Cancel for No');
 
   // Validate at least one character type is selected
   if (!addLowerCaseChars && !addUpperCaseChars && !addNumericChars && !addSpecialChars) {
     alert('Please select at least one character type.');
     return;
}

  // Return an object with user choices
  return {
    length: passwordLength,
    addLowerCaseChars: addLowerCaseChars,
    addUpperCaseChars: addUpperCaseChars,
    addNumericChars: addNumericChars,
    addSpecialChars: addSpecialChars
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
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