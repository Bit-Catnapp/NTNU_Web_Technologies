// GJOR OM TIL WHILE
// let total = 5;
// for (let j = 3; j <= 8; j++) {
// 	if (j % 2 === 0) {
// 	total += j;
// 	} 
// 	else {
// 	total *= j;
// 	}
// }

while(j <= 8)
{
  if (j % 2 === 0) {
		total += j;
		} 
	else {
		total *= j;
		}
    j++;
}

///GJOR OM TIL OBJECT
// function Food(name, cooktime) {
// 	this.name = name;
// 	this.cooktime = cooktime;
// }

// Food.prototype.describe = function() {
// console.log(`${this.name} is delicious and will take ${this.cooktime} tofinish cooking.`);
// };

// const food1 = new Food('Pizza', '15 min');
// food1.describe(); // Expected output: "Pizza is delicious and will take 15min to finish cooking."

// class Food {
// 	 constructor(name, cookingTime){
//        this.name = name;
// 	   this.cookingTime = cookingTime;
// 	 }
 
// 	 describe(){
// 		console.log(`${this.name} is delicious and will take ${this.cooktime} to finish cooking.`);
// 	 }
// }

// const food1 = new Food('Pizza', '15 min');
// food1.describe(); // Expected output: "Pizza is delicious and will take 15 min to finish cooking."


///LAG STUDENT Obj
const Student_Obj = {
	name: "Bob",
	age: "20",
	course: "PROG",

	greet_obj: function() {
		return `Hello I am ${this.name}`;
	}
};



///LAG STUDENT CLASS
class Student {
	constructor(name, age, course){
		this.name = name;
		this.age = age,
		this.course = course;
	}

	greet(){
		console.log(`Hello I am ${this.name}`);
		return `Hello I am ${this.name}`;
	}
}

const Bob = new Student('Bob','20','PROG');
let studInfo = Bob.greet();
studInfo.toUpperCase();
studInfo.length();
studInfo.pop();
studInfo.replace("Hello I Am Ine");

///Create a function for temp with a user prompt and compare
function temperature(){
	let idealTemp = 25;
    let currentTemp = prompt("What is the current temperature?")
	if(idealTemp > currentTemp)
	{
	 	console.log(`The current temperature is lower.`);
	}
	else if(idealTemp < currentTemp)
	{
		console.log(`The current temperature is greater.`);
	}
	else
	{
		console.log(`The current temperature is equal.`);
	}
}

// Define a JavaScript class named Book with:
// • Properties: name, author, ISBN
// • A getter that returns a description like “The book is called The Hunger Games by
// Suzanne Collins and has ISBN: 978-0-439-02352-8.”
// • A setter to change the name.
// Create a Promise that resolves after 3 seconds with a message "Data Loaded Successfully!".
// • Use then() and catch() to display the message in the console.
// Display the book description on the webpage once the Promise resolves.

class Book
{
	constructor(name, author, ISBN){
		this.name = name;
		this.author = author;
		this.ISBN = ISBN;
	}

	get Description(){
		console.log(`The book is called ${this.name} by ${this.author} and has ISBN: ${this.ISBN}.`);
		return "The book is called ${this.name} by ${this.author} and has ISBN: ${this.ISBN}";
	}

	set Name(name)
	{
		let temp = this.name;
		this.name = name;
		console.log(`The book name changed from ${temp} to ${this.name}`);
	}
}