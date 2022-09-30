# Password Generator

## [Password Generator] (https://ajmanzione.github.io/Password-Generator/)

## Randomly generates a password depending on what options you choose!


- The motivation for this project was to deploy an application that randomly generated a password for the user depending on the choices they made. The user has the options to include using Uppercase, lowercase, Numbers, and Special characters in their password and is limited to at least one selection.
- The project was built to test my understanding of JavaScript using functions, if, else, for, and methods found in JavaScript. It was built to serve as a functional application that can be used in real world scenarios.
- The Application solves the problems of creating a predictable password and gives the user the choices rather than just being at the will of an automatic random password generator. In my application, the user has the choice for the character type and length of their randomly generated password.
- This application build helped build on my understanding of JavaScript.



 ![Alt Text](/assets/images/button.png)

## Linking the button -----

- Ultimately the most important button on the entire page was the one that initialized the code and allowed the user to create the password, I found the best way to do this was by first navigating to the HTML and creating an ID associated with the button. The code looks like this:

```
<button id="generate" class="btn">Generate Password</button>
```

- Next was calling the ID in JavaScript and adding the event listener, this means that when the button is 'clicked' the 'input prompt' will be displayed. this is what prompts the user to input the size that they want their password to be. The code looks like this:

```
document.querySelector('#generate').addEventListener('click', inputPrompt);       
```

![Alt Text](/assets/images/password_Size.png)


## Conditionals, Prompts, and Functions

  - When the initial prompt is displayed, the code is not guarenteed to run, just yet. There still is the condition that the user inputs a number outside of the required length. Standards for password sizes suggest that a user must have a password of at least 8 but no more than 128 characters. If the user enters a value outside of the parameters they are sent an alert, and have to re-initiate the button.

![Alt Text](/assets/images/lower.png)

- Of course a similar alert is given if the user exceeds 128.

![Alt Text](/assets/images/gt.png)

- After the user enters a valid number, then its off to the races. well, almost! At this point the user gets prompted one by one if they would like to include specific characters in their password **BUT** the user can't say no to all of the conditions or no password will be created. They are then alerted like this.

![Alt Text](/assets/images/selection_error.png)

##Enough Already!

- Okay, now that we've covered all of the cases that the code **should not run** lets go through some of the criteria the user can pick. The user is prompted to either "cancel" or "okay" on a handful of criteria that specify what characters that they want their randomly generated password to contain. When the user selects "cancel" they mean no do not include, and vice, versa!

![Alt Text](/assets/images/lower_case.png)
![Alt Text](/assets/images/Upper.png)
![Alt Text](/assets/images/Screen%20Shot%202022-09-29%20at%209.35.46%20PM.png)
![Alt Text](/assets/images/special_case.png)

## Changing Global Variables depending on user choice!

- During thses prompt the code is doing some interesting things. We've assigned some empty variables and some variables with the value of **false** meaning that if they do not add 'lower case' (as an example)into their generated password than the variable 'lowerCase' remains false and nothing changes. On the other hand if they select **true** than the global variable changes and is added to the selection of characters that can be chosen from.

- Without getting too deep into how a random value is chosen, here is the code snippit showing how the work is done. (There could be a whole seperate **README** on this for loop alone) This was definitely the crux of this project and lets just say, it involved some methods found in JavaScript native including .floor .random .math .push and .join
 
 You can find a link of some methods relating to arrays that I found to be useful - [here](https://www.w3schools.com/jsref/jsref_obj_array.asp)
 
 The **for loop** as spoken about can be found in the following snippit.

 ```
 for (var i=0; i < passwordSize; i++) {
		var randomNum = Math.floor(Math.random() * selection.length);
    passwordGenerated.push(selection[randomNum]);
    passwordPrint = passwordGenerated.join("");
    }
 ```
![Alt Text](/assets/images/password.png)


## License

 -MIT License

 ### Built With

* HTML
* CSS
* JavaScript
* Git & GitHub


<!-- CONTACT -->
## Contact

Anthony Manzione - [@Instagram Handle](https://www.instagram.com/anthony.manzione/) - 
[@Linkedin](https://www.linkedin.com/in/anthony-manzione-862b44250/)

Project Link: [https://github.com/AJManzione/Password-Generator]



