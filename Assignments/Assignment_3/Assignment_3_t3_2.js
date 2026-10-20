
//Main
const validateCoupon = new Promise((resolve, reject) => {
    const shoppingCart = {
        coupon: "SAVE15",
        expired: false,
        price: 300
    }

    // Promise chaining
    if (shoppingCart.coupon !== "SAVE15") {
        reject("Coupon does not match");

    }
    else if (shoppingCart.expired === true) {
        reject("Expired Code");

    }
    else {
        resolve(shoppingCart);
    }
});

// showResult function
function showNewPrice() {

    //Handle the promise and log the result to the console
    validateCoupon
        // Output new price if promise was successfull
        .then((shoppingCart) => {
            const newPrice = shoppingCart.price * 0.85;
            const diff = shoppingCart.price - newPrice;

            //Update the element variable and display the result in the HTML
            document.getElementById("discount").innerHTML =
                `Success!<br>
                 Coupon was: ${shoppingCart.coupon}<br>
                 Original price was: ${shoppingCart.price}<br> 
                 You saved: ${diff}<br> 
                 New price is: ${newPrice}<br>
                 Session sync complete...`;
        })
        .catch((error) => {
            document.getElementById("discount").innerHTML = error
        });
};