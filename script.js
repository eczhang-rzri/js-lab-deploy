

//variables
const myName = "Emily"
const fruits = ['apples', 'grapes', 'watermelon', 'oranges', 'cherries'];
const car = {type:"Subaru", model:"Legacy", color:"Black"};
let age = 20;



//Challenge 1a
function sayHelloWorld() {

    // Step 1 - Move your alert that runs on page load to here
    // alert ("Hello my name is Emily Zhang");

    // Step 2 - Update the alert to display a concatenation of the variables above that spell out something like this:
    // Hi my name is Clint.  I like apples and I drive a Silver Prius.  You'll need to add color to the car object
    alert ("Hello my name is " + myName + ". I like " + fruits[0] + " and I drive a " + car.color + " " + car.model + ".");

}



//Challenge 1b
function dogYears() {  
    // divide the age variable by 7 and store it a variable called answer
    answer = Math.round(age / 7);

    // Challenge 1a - Display result in an alert
    // alert ("In dog years you are: " + answer);

    // Challenge 1b - Display result in an <h2> tag
    let resultElement = document.getElementById("results1");
    resultElement.textContent = "In dog years you are: " + answer;
  }



//Challenge 2
 function Challenge2() {
    //age = 20;
    // divide the age variable by 7 and store it a variable called answer
    answer = Math.round(age / 7);

    // Challenge 1b - Display result in an <h2> tag
    let resultElement2 = document.getElementById("results2");
    if (age < 14) {
      resultElement2.textContent = "You are a puppy!";
    }
    else {
      resultElement2.textContent = "You are an adult dog!";
    }

 }



//Challenge 3
//need to figure out how to use create element
 function Challenge3() {
  const resultElement3 = document.getElementById("results3");
  const fruitList = document.createElement("ul");

  for (let i = 0; i < fruits.length; i++){
    const listItem = document.createElement("li");
    listItem.textContent = fruits[i];
    fruitList.appendChild(listItem);
  }
  resultElement3.appendChild(fruitList);

 }



 //Challenge 4
 function Challenge4() {
  const resultElement4 = document.getElementById("results4");
  const fruitList = document.createElement("ol");

  for (let i = 0; i < fruits.length; i++){
    const listItem = document.createElement("li");
    listItem.textContent = fruits[i].substring(0,3) + "s";
    fruitList.appendChild(listItem);
  }
  resultElement4.appendChild(fruitList);

 }


 //Challenge 5
 function Challenge5() {
  const resultElement5 = document.getElementById("results5");
  const fruitList = document.createElement("ol");
  
  const moddedFruits = fruits;  //create a copy of fruits to do array operations
  moddedFruits.pop();
  firstFruit = moddedFruits.shift();
  moddedFruits.push(firstFruit);

  for (let i = 0; i < moddedFruits.length; i++){
    const listItem = document.createElement("li");
    listItem.textContent = moddedFruits[i];
    fruitList.appendChild(listItem);
  }
  resultElement5.appendChild(fruitList);
 }


 function Challenge6() {

  const resultElement6 = document.getElementById("results6");
  const date = new Date();
  console.log(date.type);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let dayOfWeek = daysOfWeek[date.getDay()];
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  const actualHours = date.getHours();
  let hours = actualHours % 12;
  let ampm;
  if (Math.floor(date.getHours() / 12) == 1) {
    ampm = "PM";
  }
  else {
    ampm = "AM";
  }
  let minutes = date.getMinutes();
  let phase;

  switch (true) {
    case (actualHours >= 0 && actualHours < 5):
      phase = "past midnight. Why are you awake?";
      break;
    case (actualHours >= 6 && actualHours < 11):
      phase = "morning. Good morning!";
      break;
    case (actualHours >= 11 && actualHours < 1):
      phase = "midday. Lunch time!";
      break;
    case (actualHours >= 13 && actualHours < 18):
      phase = "afternoon. Good afternoon!";
      break;
    case (actualHours >= 18 && actualHours < 21):
      phase = "evening. Dinner time!";
      break;
    case (actualHours >= 21 && actualHours < 24):
      phase = "nighttime. Good night!";
      break;
  }

  let message = "Today is " + dayOfWeek + ", " + month + " " + date.getDate() + ", " + year + ". It is " +
                hours + ":" + minutes + " " + ampm + ", which means that it is " + phase;

  resultElement6.textContent = message;

 }
