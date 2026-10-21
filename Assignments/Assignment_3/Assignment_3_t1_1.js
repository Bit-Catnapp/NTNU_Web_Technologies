///Callbacks
function toShouting(str) {
    //Check if the input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    else {
        return str.toUpperCase();
    }
}
function toSecret(str) {
    //Check if the input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    else {
        return str.replace(/[aeiou]/gi, '*');
    }
}

///Main Function
function formatTxt(inputId, callback) {

    // Retrieve string from inputID
    const textInput = document.getElementById(inputId).value;

    //Check if the input is a string
    if (typeof textInput !== 'string') {
        throw new Error('Input must be a string');
    }
    else {
        //Call the formatTxt function with the input and callback
        const result = callback(textInput);
        textInput.value = result;
        alert(result);

        //Reset the input field to empty after displaying the result
        document.getElementById(inputId).value = '';
    }
}
