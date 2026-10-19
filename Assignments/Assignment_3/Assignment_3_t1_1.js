///Main Function
function formatTxt(str,callback)
{
    //Check if the input is a string
    if (typeof str !== 'string') 
    {
        throw new Error('Input must be a string');
    }
    else
    {
        return callback(str);
    }
}

///Callbacks
function toShouting(str)
{
    //Check if the input is a string
    if (typeof str !== 'string') 
    {
        throw new Error('Input must be a string');
    }
    else
    {
        return str.toUpperCase();
    }
}
function toSecret(str)
{
    //Check if the input is a string
    if (typeof str !== 'string') 
    {
        throw new Error('Input must be a string');
    }
    else
    {
        return str.replace(/[aeiou]/gi, '*');
    }
}

//Helper
function showResultTxt(inputId, callback)
{
    //Retrieve id from input
    const textInput = document.getElementById(inputId);

    //Call the formatTxt function with the input and callback
    const result = formatTxt(textInput.value, callback);
    textInput.value = result;
    alert(result);
    
    //Reset the input field to empty after displaying the result
    document.getElementById(inputId).value = '';
}