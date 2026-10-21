//showResult function
function PlayDiceRoll() {
    // Local variables
    let displayID = document.getElementById("diceRolls");
    const localRandomNumber = Math.floor(Math.random() * 6) + 1;

    //Simulate dice roll
    const diceRoll = new Promise((resolve, reject) => {

        //Check if the roll is high or low
        if (localRandomNumber > 3) {
            resolve(`Rolled ${localRandomNumber}: High roll! You win.`);
        }
        else {
            reject(`Rolled ${localRandomNumber}: Low roll! You lose.`);
        }
    });

    //Handle the promise and log the result to the console
    diceRoll
        .then((result) => displayID.innerHTML = `Dice Roll: ${localRandomNumber}<br>${result}`)
        .catch((error) => displayID.innerHTML = `Dice Roll: ${localRandomNumber}<br>${error}`)
        .finally(() => {

            // Display message for timer
            const resetMessage = displayID.innerHTML;
            let timer = 3;

            //Display Interval for resetting
            const countdown = setInterval(() => {

                //Updating resetMessage
                displayID.innerHTML =
                    `${resetMessage}<br>Dice Roll Complete<br>Resetting in ${timer}...`;

                //de-incrementing timer
                timer--;

                //if timer is less than 0, clear timer and reset
                if (timer < 0) {
                    clearInterval(countdown);
                    displayID.innerHTML = "";
                }

            }, 1000);
        });
};

