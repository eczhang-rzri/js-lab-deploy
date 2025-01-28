

//variables
const myName = ""
const fruits = ['', '', '', '', ''];
const car = {type:"", model:""};



//Challenge 1a
function sayHelloWorld() {

    // Step 1 - Move your alert that runs on page load to here
    alert ("Hello my name is Clint Tuttle");

    // Step 2 - Update the alert to display a concatenation of the variables above that spell out something like this:
    // Hi my name is Clint.  I like apples and I drive a Silver Prius.  You'll need to add color to the car object

}

//Challenge 1b
function dogYears() {
    // Set a variable called age equal to your age
    age = 44;
    
    // divide the age variable by 7 and store it a variable called answer
    answer = age / 7;

    // Challenge 1a - Display result in an alert
    // alert ("In dog years you are: " + answer);

    // Challenge 1b - Display result in an <h2> tag
    let resultElement = document.getElementById("results1");
    resultElement.textContent = "In dog years you are: " + answer;
  }



//Challenge 2
 function Challenge2() {

 }




//Challenge 3
 function Challenge3() {

 }




 //Challenge 4
 function Challenge4() {

 }


 //Challenge 5
 function Challenge5() {


 }



 function Challenge6() {

    let resultElement = document.getElementById("results6");

    const message = "Seriously?  Just find something cool you can do in JavaScript and insert that into Challenge6 function and have it run when the 'Wow Me!' button is clicked.  Please remove this alert before you submit your work"

    resultElement.textContent = message;

 }
