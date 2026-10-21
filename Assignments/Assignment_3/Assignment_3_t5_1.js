//Main
function getBookingInfo() {
    //local variables
    let display = "";
    let urlString = "https://travel.com?price=1000&day=Wednesday";
    let parts = urlString.split("?"); // [https://travel.com, price=1000&day=Wednesday]
    let pairs = parts[1].split("&"); // [price=1000, day=Wednesday]

    //Iterating over the arrays
    for (let i = 0; i < pairs.length; i++) {
        let segments = pairs[i].split("=");

        let key = segments[0];
        let value = segments[1];

        display += `
        Key is: ${key}<br>
        Value is: ${value}<br>`;

    }
    document.getElementById("booking").innerHTML = display;

    setTimeout(() => {
        document.getElementById("booking").innerHTML = "";
    }, 2000);
}