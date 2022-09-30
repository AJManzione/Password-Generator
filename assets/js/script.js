
//Arrays to be picked from randomly

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var selection = [];


//global variables set to no unless user specifies otherwise
var passwordPrint = [];
var passwordGenerated = [];
var passwordSize = 0;
var lowerCaseIncluded = false; 
var upperCaseIncluded = false;
var numbersIncluded = false;
var specialCharactersIncluded = false;


// this function gets called at the very end of the code and print's the appropriate 
function printPassword() {
  var refresh = alert ("your password is " + passwordPrint + "\n \n Click ok to refresh");
  if (refresh == true) {
  }
  document.location.reload(true);
}



document.querySelector('#generate').addEventListener('click', inputPrompt); // press a button on the webpage




// prompts that change global variables to True dependant on user behavior. 

function inputPrompt() {

    var userInput = prompt("How many characters do you want your password to be? (Please enter a number between 8 - 128)");
    if (userInput >= 8 && userInput <= 128) {
      passwordSize = userInput; //assigns the global variable to the user input
      promptOne();
    } else if (userInput < 8) {
      alert("You entered a number lower than 8 \nYou must enter a number between 8 - 128");
    } else if (userInput > 128) {
      alert("You entered a number greater than 128 \nYou must enter a number between 8 - 128");
    } else {
      alert("You did not enter any number");
      inputPrompt();
    }
}

function promptOne() {

  var userLowerCase = confirm ("Would you like to include lowercase in your password? \n(example: a, b, c, d, etc...)"); 

 if (userLowerCase == true) {
  lowerCaseIncluded = userLowerCase; //asigns the global variable to the user input
  promptTwo();
  } else promptTwo();
}

function promptTwo() {

  var userUpperCase = confirm ("Would you like to include UPPERCASE in your password? \n(example: A, B, C, D, etc...)"); 

  if (userUpperCase == true) {
  upperCaseIncluded = userUpperCase; // assigns the global variable to the user input
  promptThree();
  } else promptThree();
}  

function promptThree() {

  var userNumbers = confirm ("Would you like to include NUMBERS in your password? \n(example: 1, 2, 3, 4, etc...)"); 

 if (userNumbers == true) {
  numbersIncluded = userNumbers; //asigns the global variable to the user input
  promptFour();
  } else promptFour();
}

function promptFour() {

    var userSpecialCharacters = confirm("Would you to include SPECIAL CHARACTERS in your password? \n(example: !, @, #, $, etc...)");

    if (userSpecialCharacters == true) {
    specialCharactersIncluded = userSpecialCharacters;
    createRandomPassword();
    } else { alert("Your password is being generated");
    createRandomPassword();
    }
  
}
 



//randomly produces oass




function createRandomPassword() {


   if (lowerCaseIncluded === true) {
   selection = selection + lowerCase;
   }

   if (upperCaseIncluded === true) {
    selection = selection + upperCase;
   }

   if (numbersIncluded === true) {
    selection = selection + specialCharacters;
   }

   if (specialCharactersIncluded === true) {
    selection = selection + specialCharacters;
   }
 
   for (var i=0; i < passwordSize; i++) {
		var randomNum = Math.floor(Math.random() * selection.length);
    passwordGenerated.push(selection[randomNum]);
    passwordPrint = passwordGenerated.join("");
    }

   return printPassword();
}

