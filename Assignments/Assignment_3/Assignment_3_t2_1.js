//Main function
function sendCampaign(campaignName, callback) {
    // Local variables 
    let seconds = 3;
    let countdown;

    // Display the status of the campaign
    document.getElementById("status").innerHTML =
        `Initiating transmission sequence for: ${campaignName}<br>`;

    // Countdown timer for sending the campaign
    document.getElementById("timer").innerHTML =
        `Sending in ${seconds}...`;

    // Start the countdown timer and call the countdownCallback function every second
        countdown = setInterval(() => {
            // Call the countdownCallback function and update the seconds variable
            seconds = countdownCallback(campaignName, callback, seconds, countdown);
        }, 1000);
}

//Callbacks
function countdownCallback(campaignName, callback, seconds, countdown) {
    // Decrement the seconds and update the timer display
    seconds--;

    // If there are still seconds left, update the timer display
    if (seconds > 0) {
        document.getElementById("timer").innerHTML =
            `Sending in ${seconds}...`;
    }
    else {
        // If the countdown has reached zero, clear the interval and call the callback function
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "";
        callback(campaignName);

        // Clear the status and timer display after the campaign is sent
        document.getElementById("status").innerHTML = "";
        document.getElementById("timer").innerHTML = "";
    }
}

function generateReport(campaignName) {
    // Display the result after the campaign is sent
    document.getElementById('result').innerHTML = 
        `Performance analytics report compiled and updated on dashboard.<br>` +
        `Emails delivered successfully to: ${campaignName}`;

    // Clear the result after 3 seconds
    setTimeout(() => {
        document.getElementById('result').innerHTML = "";
    }, 3000);           
}

//Show result
function showResultCampaign(campaignNameID) {
    // Get the campaign name from the input field
    const campaignName = document.getElementById(campaignNameID).value;
    sendCampaign(campaignName, generateReport);

    // Clear the input field after sending the campaign
    document.getElementById(campaignNameID).value = "";
}