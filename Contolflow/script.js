
//1) (Approach 1: If Statement)

/*
In this approach, we are using an if statement to check a specific condition, 
the code block gets executed when the given condition is satisfied.

if ( condition_is_given_here ) {
    // If the condition is met, 
    //the code  will get executed.
}

*/ 

let temp = 40;

if(temp < 50 ){
    const wind = 30;
    //console.log(`temp is less than 50*C and wind speed is ${wind} in KmPh`)
}else {
    console.log(`temp is more than 50*C`)
}

console.log(`temp is less than 50*C and wind speed is ${wind} in KmPh`)

/* Approach 2: Using If-Else Statement

The if-else statement will perform some action for a specific condition. If the condition meets then
a particular code of action will be executed otherwise it will execute another code of action 
that satisfies that particular condition. */

let condition = true;

if (condition) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

/* Approach 3: Using Switch Statement

The switch case statement in JavaScript is also used for decision-making purposes. In some cases, using the
switch case statement is seen to be more convenient than if-else statements. */

let num = 5;

switch (num) {
	case 0:
		console.log("Number is zero.");
		break;
	case 1:
		console.log("Number is one.");
		break;
	case 2:
		console.log("Number is two.");
		break;
	default:
		console.log("Number is greater than 2.");
};

// ------------------------------------------------------------------------------

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")








