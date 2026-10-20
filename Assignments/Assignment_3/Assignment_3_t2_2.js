//Main function
function calculateFactorial(number, callback) {
    let seconds = 3;
    let countdown;

    document.getElementById("statusCalc").innerHTML =
        `Initializing factorial calculation for: ${number}<br>`;

    // Countdown timer for sending the campaign
    document.getElementById("timerCalc").innerHTML =
        `Sending in ${seconds}...`;
    
    //Calculate factorial
    const fact_num = factorial(number);

    // Start the countdown timer and call the countdownCallback function every second
    countdown = setInterval(() => {
       
        // Call the countdownCallback function and update the seconds variable
        seconds = countdownCallbackCalc(fact_num, callback, seconds, countdown);
    }, 1000);
}

//Callbacks
function countdownCallbackCalc(number, callback, seconds, countdown) {
    // Decrement the seconds and update the timer display
    seconds--;

    // If there are still seconds left, update the timer display
    if (seconds > 0) {
        document.getElementById("timerCalc").innerHTML =
            `\nSending in ${seconds}...`;
    }
    else {
        // If the countdown has reached zero, clear the interval and call the callback function
        clearInterval(countdown);
        document.getElementById("timerCalc").innerHTML = "";
        callback(number);

        // Clear the status and timer display after the campaign is sent
        document.getElementById("statusCalc").innerHTML = "";
        document.getElementById("timerCalc").innerHTML = "";
    }
}

function displayResult(number) {
    // Display the result after the campaign is sent
    document.getElementById('resultCalc').innerHTML = 
        `Calculation complete.<br>` +
        `The final computed result is: ${number}`;

    // Clear the result after 3 seconds
    setTimeout(() => {
        document.getElementById('resultCalc').innerHTML = "";
    }, 1500);           
}

function factorial(n) {
    // Handle negative numbers
    if (n < 0) return "Error: Factorial is not defined for negative numbers."; 
    // Base case: factorial of 0 is 1
    if (n === 0) return 1;

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

//Show result
function showResultCalculation(inputID) {
    // Get the number from the input field
    const number = document.getElementById(inputID).value;
    calculateFactorial(number, displayResult);

    // Clear the input field after calculating the factorial    
    document.getElementById(inputID).value = "";
}