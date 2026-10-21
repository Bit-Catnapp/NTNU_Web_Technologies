// Main
function getFlight(){
    let display = "";
    let urlString = "https://fly.com?name=norwegian&passenger=60";

    let parts = urlString.split("?"); // [https://fly.com, name=norwegian&passenger=60]
    let queryString = parts[1]; // [name=norwegian&passenger=60]
    let params = new URLSearchParams(queryString);

    //Iterating over the arrays for-each loop
    //Automaticly creates pairs usinng "&" to split, uses the "=" to make the pairs
    for (let entry of params.entries()) {
       
        let key = entry[0];
        let value = entry[1];

        display += `
        Key is: ${key}<br>
        Value is: ${value}<br>`;

    }
    document.getElementById("search").innerHTML = display;

    setTimeout(() => {
        document.getElementById("search").innerHTML = "";
    }, 2000);
}