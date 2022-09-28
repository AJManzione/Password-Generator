// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Get references to the #generate element

document.querySelector('#generate').addEventListener('click', promptOne);


function promptOne() {

    var userNumber = prompt("How many characters long do you want your password to be? (Please enter a number between 8 - 128)");
    
    if (userNumber >= 8 && userNumber <= 128) { promptTwo(1)}
      else promptOne(1)
}
  

function promptTwo() {

    var userUpperCase = confirm ("Would you like to use uppercase's in your password?"); 

    if (userUpperCase = true) // add upper cases to password
    {promptThree(1)}
      else promptThree(1)
}


function promptThree() {

  var userSpecialCharacters = confirm("Would you like special characters to be included in your password? (example: !, @, #, $, etc... ");

  if (userSpecialCharacters = true) {// add special characters to password
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


