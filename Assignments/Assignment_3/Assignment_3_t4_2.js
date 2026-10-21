//Async Functions
async function getLoyaltyDiscount(yearsActive) {
    //Retrieve and type cast parameter for flag
    let years = Number(document.getElementById(yearsActive).value);

    if (years > 2) {
        return 15;
    }
    else {
        return 0;
    }
}

//Main
async function applyUpgrade(accountName, yearsActive) {
    //Retrieve name
    const name = document.getElementById(accountName).value;

    //Wait for Discount and calculate
    let loyaltyDiscount = await getLoyaltyDiscount(yearsActive);
    let discount = 50 - loyaltyDiscount;

    //Display update
    document.getElementById("subscription").innerHTML =
        `System Log: Starting upgrade process for Account = ${name}...<br>`;

    //output logic
    if (loyaltyDiscount > 0) {
        //Dsiplay timers
        setTimeout(() => {
            document.getElementById("subscription").innerHTML =
                `Invoice: Account = ${name} processed<br> 
             Final balance due: ${discount}$`;

            setTimeout(() => {
                document.getElementById("subscription").innerHTML = "";
                document.getElementById("subscriptionForm").reset();
            }, 3000)
        }, 2000);

    }
    else {
        document.getElementById("subscription").innerHTML =
            `Invoice: Account = ${name}<br> 
             Found no discount<br>
             Final balance due: ${discount}`;

        setTimeout(() => {
            document.getElementById("subscription").innerHTML = "";
            document.getElementById("subscriptionForm").reset();
        }, 3000);
    }
}