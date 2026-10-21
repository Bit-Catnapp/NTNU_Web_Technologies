//callbacks
function double(num) {
    if (typeof num !== 'number') {
        throw new Error('Input must be a number');
    }
    else {
        return num * 2;
    }
}

function even_or_odd(num) {
    if (typeof num !== 'number') {
        throw new Error('Input must be a number');
    }
    else {
        //using ternary operator and modulo flag check if value is divisible by 2 or not
        //If divisible by 2 then it is even else odd
        return num % 2 === 0 ? 'even' : 'odd';
    }
}

//main function 
function randomNum(callback) {
    //Retrieve id from input
    const randomNumber = Math.floor(Math.random() * 10) + 1;;
    const resultNum = callback(randomNumber);

    alert("Number was : " + randomNumber + " and result is : " + resultNum);
};
