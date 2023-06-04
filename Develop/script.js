// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = [  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'];
var lowercaseCharacters = [  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v','w',  'x',  'y',  'z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];


console.log(lowercaseCharacters)
console.log(uppercaseCharacters)
console.log(numericCharacters)
console.log(specialCharacters)




var generatePassword = function() {
  var computerChoice = [];
  var allCharacters = [];
  var passwordLength =  document.getElementById('passwordlength').value
  console.log(passwordLength + "TextArea Value")
  console.log(allCharacters)
  var condition = true
  
  //var uppercase = window.confirm("Include Upper Case Characters?");
  //var lowercase = window.confirm("Include Lower Case Characters?");
  //var numeric = window.confirm("Include Numeric Characters?");
  //var special = window.confirm("Include Special Characters?");

console.log(document.getElementById('upperCase').checked);
console.log(document.getElementById('lowerCase').checked);
console.log(document.getElementById('numeric').checked);
console.log(document.getElementById('special').checked);
  if (document.getElementById('upperCase').checked){
    allCharacters = allCharacters.concat(uppercaseCharacters);
    console.log(allCharacters + " uppercase");
  }
  if 
  (document.getElementById('lowerCase').checked) {
    allCharacters = allCharacters.concat(lowercaseCharacters);
    console.log(allCharacters + " lowercase")
  }
  if (document.getElementById('numeric').checked) {
    allCharacters = allCharacters.concat(numericCharacters);
    console.log(allCharacters + " numeric")
  }
  if (document.getElementById('special').checked) {
    allCharacters = allCharacters.concat(specialCharacters);
    console.log(allCharacters + " special")
  }

  for(var i=0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * allCharacters.length);
    computerChoice = computerChoice.concat(allCharacters[index]);
  }

  if (allCharacters.length === 0) {
    alert("Minimum of one option need to be selected");
    console.log(computerChoice);
    return computerChoice = "Password Not Generated";
  }
  // Enabling a disabled button to enable it again 
  document.querySelector('#copy').disabled = false;
  
  console.log(computerChoice + " random");
  return computerChoice.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function copy() {
  let textarea = document.getElementById("password");
  textarea.select();
  document.execCommand("copy");
}