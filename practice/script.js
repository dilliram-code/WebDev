"use strict";
// console.log('Hello World');
// console.log("JavaScript Practice");
// console.log(7+8);



// Let's see the example of template literals
// let phonePrice = 30000;
// let earphonePrice = 3000;

// console.log("Total price of the gadgets is: ",(phonePrice+earphonePrice)," Rupees.");
// console.log("Total price of the gadgets is " + (phonePrice+earphonePrice) + " Rupees.");

// Template literal
// total = `Total price of the gadgets is: ${phonePrice+earphonePrice} Rupees.`
// console.log(total);

// let a = 1;

// // Increment operator
// a++;
// console.log(a) //2

// a--; 
// console.log(a) //1
// console.log(a++) //1
// console.log(a) //2
// console.log(a++)
// console.log(a)


// let first_num = 10
// let second_num = "10"
// console.log(first_num == second_num)
// console.log(first_num === second_num)

// console.log(0=="")
// console.log(1==false)
// console.log(1===true)
// console.log(1==true)



// let color1 = "green";
// let color2 = "red";
// let color3 = "yellow";

// let value = color1;

// if (value==color1)
// {
//     console.log("You can continue your journey");
// } 
// else if (value==color2) 
// {
//     console.log("Danger ahead!! Slow down your speed");
// }else 
// {
//     console.log("Get ready to go!");
// }

// console.log("I am going to study about the array");

//Function declaration
// function sumTwoNumbers(first, second) {
//     return first + second;
// }
// const result = sumTwoNumbers(2, 9);
// console.log(result);


//Array functions
//Using push function
// const threeDays = ["Sunday", "Monday","Tuesday"];
// const fourDays = ["Wednesday", "Thurday", "Friday", "Saturday"];
// //Using push command
// threeDays.push(fourDays);
// console.log(threeDays);

// console.log(threeDays[3][0]);


//Using concat function
// const firstArray = [1,2,3,4,5,6];
// const secondArray = [10,11,12,13,14,15];

// const concatArray = firstArray.concat(secondArray);
// // console.log(concatArray);
// console.log(concatArray[10]);
// console.log("hello World!");

//Spread operator
// const firstPart = [20,30,40,50];
// const secondPart = [100, 200, 300, 400];

// let allParts = [...firstPart, ...secondPart]
// console.log(allParts);

// const thirdPart = [1000, 2000, 3000, 4000, 5000];
// let combinedParts = [...firstPart, ...secondPart, ...thirdPart];
// console.log(combinedParts);

// let series1 = [1,2,3,4,5,6,7,8,9,10];
// let series2 = [11,12,13,14,15,16,17,18,19,20];
// let series3 = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
// const newArray = Array.of(series1, series2, series3);
// console.log(newArray);

//Control Flow in JavaScript
//if statement

// const isUserloggedIn = true;
 
// if(isUserloggedIn) {
//     console.log("User is logged in.");
// }

// if (3 != 2) {
//     console.log("Yes it is.");
// }


// if ( 2 == "2" ){
//     console.log("executed.");
// }

// const temperature = 50;

// if (temperature > 30) {
//     console.log("normal day");
// }else {
//     console.log("hot day");
// }

// const balance = 1000;

// if (balance > 500) console.log("test");


// const userloggedIn = true;
// const debitCard = true;

// if (userloggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course.");
// }

// if (userloggedIn && debitCard && 2 ==3) {
//     console.log("Allow to buy course.");
// }

//Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined
// NaN


//Truthy values:
//"0", 'false', ' ', [], {}, function(){},

//  const userEmail = [];

//  if (userEmail.length === 0) {
//     console.log("Array is empty.");
//  }


// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


//While and do while loop

// let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }

// let myArray = ['flash', 'batman', 'superman']
// let arr = 0;

// while (arr<myArray.length) {
//     console.log(`The value is ${myArray[arr]}`);
//     arr = arr + 1;    
// }

//Do while loop

// let start = 1;
// do {
//     console.log(`The value is ${start}`);
//     start++;
// } while (start <= 10);

//special case of dowhile loop
// let start = 11;
// do {
//     console.log(`the value of start is ${start}`);
// } while (start <= 10);


//forof loop
// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

//Map, Filter and Reduce Function in JS
//map function
const numbers = [1,2,3,4,5,6,7,8,9,10];
const doubleNumbers = numbers.map(function (number){
    return number * 2
});

// console.log(doubleNumbers);
//This gives the output in the array format. 

//Filter function
//The 'filter' function is used to create a new array
// with the only the elements that pass a certain condition

//Selecting the numbers divisible by 5 only.
const numCollection = [11,15,16,20,21,30,35,36,40,45];
const divisibleByFive = numCollection.filter(function (number) {
    return number %5 === 0;
})

// console.log(divisibleByFive);
//This gives the output of that numbers which are divisible by only five. 

//Using the reduce function
//The reduce function is used to accumulate the elements
//of an array into a single value. 

//Example of reduce function.

const sampleNumbers = [1,2,3,4,5,6,7,8,9,10];
const sumOfNumbers = sampleNumbers.reduce(function(start, arrayNumber){
    return start + arrayNumber;
}, 0 //this is the starting value of the result.
)

// console.log(sumOfNumbers);
//This gives the summation of the numbers in the array above 


console.log("I am hero!");














//Higher Order Array Loops
