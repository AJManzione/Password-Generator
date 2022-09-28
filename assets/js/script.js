// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Get references to the #generate element

document.querySelector('#generate').addEventListener('click', promptOne);


function promptOne() {

    var userNumber = prompt("How many characters do you want your password to be? (Please enter a number between 8 - 128)");
    if (userNumber >= 8 && userNumber <= 128) {
      promptTwo();
    } else if (userNumber < 8) {
      alert("You entered a number lower than 8 \nYou must enter a number between 8 - 128");
    } else if (userNumber > 128) {
      alert("You entered a number greater than 128 \nYou must enter a number between 8 - 128");
    } else {
      alert("You did not enter any number");
      promptOne();
    }
}
function promptTwo() {

  var userUpperCase = confirm ("Would you like to include NUMBERS in your password? \n(example: 1, 2, 3, 4, etc...)"); 

  if (userUpperCase = true) {
    promptThree()
  } else promptThree()
}  

function promptThree() {

    var userNumbersIncluded = confirm ("Would you like to include UPPERCASE in your password? \n(example: A, B, C, D, etc...)"); 

    if (userNumbersIncluded = true) {
      promptFour()
    } else promptFour()
}


function promptFour() {

  var userSpecialCharacters = confirm("Would you to include SPECIAL CHARACTERS in your password? \n(example: !, @, #, $, etc...)");

  if (userSpecialCharacters = true) {
    alert ("Your password is being generated"); // print password to box}
  }
    else alert ("Your password is being generated"); // print password to box)

}
    



/* 
    var userUpperCase = confirm ("Would you like to use uppercase's in your password?"); 
    var userSpecialCharacters = confirm("Would you like special characters to be included in your password? (example: !, @, #, $, etc... ")
    






  



 */







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button






     
    
    
/*     function validNumber (x);
        if (x > 8 || x < 128) {
          confirm ("Would you like to use uppercase's in your password?"); }


    confirm ("Would you like to use special characters in your password? (example: !@#$ etc..)");

 */
/*     if (confirm("Shall I print Hello World?")) {
      document.write("Hello World");
  } else {
      document.write("OK, I won't print it.");
  } */


