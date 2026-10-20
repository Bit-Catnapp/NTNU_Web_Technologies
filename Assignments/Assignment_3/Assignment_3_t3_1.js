//Global variable to store the element
let element = "";
let randomNumber = Math.floor(Math.random() * 6) + 1;

//Main
//Promise to simulate a dice roll
const diceRoll = new Promise((resolve, reject) => {

    //Simulate a dice roll
    const localRandomNumber = randomNumber;

    //Check if the roll is high or low
    if (localRandomNumber > 3) {
        resolve("High Roll You Win!");
    }
    else {
        reject("Low Roll You lose!");
    }
});

//Helper function
//Handle the promise and update the element variable
diceRoll
    .then((result) => { element = result; })
    .catch((error) => { element = error; })
    .finally(() => { element += "<br>Dice Roll Complete"; });

//showResult function
function showResultDiceRoll() {

    //Handle the promise and log the result to the console
    diceRoll
        .then((result) => console.log(result))
        .catch((error) => console.error(error))
        .finally(() => console.log("Dice Roll Complete"));

    //Update the element variable and display the result in the HTML
    document.getElementById("diceRolls").innerHTML = `Dice Roll: ${randomNumber}<br>${element}`;
};