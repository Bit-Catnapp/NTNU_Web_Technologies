
// showResult function
function playShopping() {
    // Shoppingcart object
    const shoppingCart = {
        coupon: document.getElementById("coupon").value,
        expired: document.getElementById("expired").checked,
        price: document.getElementById("original_price").value
    };

    // Promise
    const validateCoupon = new Promise((resolve, reject) => {

        // Promise chaining
        if (shoppingCart.coupon < 0) {
            reject("Coupon value illegal");

        }
        else if (shoppingCart.expired) {
            reject("Expired Code");

        }
        else {
            resolve(shoppingCart);
        }
    });

    //Handle the promise and log the result to the console
    validateCoupon
        // Output new price if promise was successfull
        .then((shoppingCart) => {
            const newPrice = shoppingCart.price * (1 - shoppingCart.coupon / 100);
            const diff = shoppingCart.price - newPrice;

            //Update the element variable and display the result in the HTML
            document.getElementById("discount").innerHTML =
                `Success!<br>
                 Coupon discount was: ${shoppingCart.coupon}<br>
                 Not expired: ${shoppingCart.expired}<br>
                 Original price was: ${shoppingCart.price}<br> 
                 You saved: ${diff}<br> 
                 New price is: ${newPrice}<br>
                 Session sync complete...`;
        })
        .catch((error) => {
            document.getElementById("discount").innerHTML = error
        })
        .finally(() => {
            //Display Timer
            setTimeout(() => {
                document.getElementById("shoppingCartForm").reset();
                document.getElementById("discount").innerHTML = "";
            }, 3000); // 1000 ms = 1 second
        });
};