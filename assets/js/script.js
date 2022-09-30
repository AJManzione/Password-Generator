
//Arrays to be picked from randomly

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var selection = [];


//Global variables set to NONE unless user specifies otherwise
var passwordPrint = [];
var passwordGenerated = [];
var passwordSize = 0;
var lowerCaseIncluded = false; 
var upperCaseIncluded = false;
var numbersIncluded = false;
var specialCharactersIncluded = false;


// And Lastly,
// This function gets called at the very end of the code and print's the appropriate password, followed by a refresh of the page!!!
function printPassword() {
  var refresh = alert ("your password is " + passwordPrint + "\n \n Click ok to refresh");
  if (refresh == true) {
  }
  document.location.reload(true); //refresh the page after user presses okay, this gets rid of all the data after they press okay.. >:)
}


// connects the "generate password" button that is tied to html to the first prompt for the user/
document.querySelector('#generate').addEventListener('click', inputPrompt); // press a button on the webpage




// Prompt one 'User must enter a value between 8 - 128, otherwise repromtped.

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


// Prompt two ' Including lowercases to the password, if true the global variable gets assigned

function promptOne() {

    var userLowerCase = confirm ("Would you like to include lowercase in your password? \n(example: a, b, c, d, etc...)"); 

    if (userLowerCase == true) {
    lowerCaseIncluded = userLowerCase; //asigns the global variable to the user input
    promptTwo();
    } else promptTwo();
}


// Prompt two  Including Uppercases to the password, if true the global variable gets assigned

function promptTwo() {

    var userUpperCase = confirm ("Would you like to include UPPERCASE in your password? \n(example: A, B, C, D, etc...)"); 

    if (userUpperCase == true) {
    upperCaseIncluded = userUpperCase; // assigns the global variable to the user input
    promptThree();
    } else promptThree();
}  

// Prompt three  Including Numbers to the password, if true the global variable gets assigned

function promptThree() {

    var userNumbers = confirm ("Would you like to include NUMBERS in your password? \n(example: 1, 2, 3, 4, etc...)"); 

    if (userNumbers == true) {
    numbersIncluded = userNumbers; //asigns the global variable to the user input
    promptFour();
    } else promptFour();
}

// Prompt four Including special  to the password, if true the global variable gets assigned

function promptFour() {

    var userSpecialCharacters = confirm("Would you to include SPECIAL CHARACTERS in your password? \n(example: !, @, #, $, etc...)");

    if (userSpecialCharacters == true) {
    specialCharactersIncluded = userSpecialCharacters;
    createRandomPassword();
    } else { alert("Your password is being generated...");
    createRandomPassword(); // function gets called that checks conditional statements below 
    }
}
 


/* This function contains conditionals that assign the uppercase, lowercase, numbers, or special characters to an array that was classified as empty depending on what the user selected in prompts 1 - 4 */

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

   else (alert("You did not make any selections... \n please select at least one criteria"));
   
/* still within the function but after the conditionals, the for loop adds a random character(num, upper, lower, symbol) to the variable called generatedPassword by using the .push method.. essentionally the variable "selection(containing user criteria)"" is being called at an array position by a random num "randomNum" the elements of the array gets randomly called and pushed to the variable "passwordGenerated" one character at a time and includes commas. */

  
   for (var i=0; i < passwordSize; i++) {
		var randomNum = Math.floor(Math.random() * selection.length);
    passwordGenerated.push(selection[randomNum]);
    passwordPrint = passwordGenerated.join("");  // since we dont want commas to be included, we use the .join method to sperate the  //
    }                                            // elements of the array and convert them into one string and get rid of the commas  //
                                                 // by including quotations inside the .join("") parameters.
   return printPassword();
}                           // the code then jumps back to the top //

