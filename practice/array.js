//Array 
const myArray = [1,2,3,4,5,6,7,8,9,10];
const newArray = new Array(2,4,6,8,10,12,14);

// console.log(myArray[0]);
// console.log(newArray[-1]); //element doesn't exit, undefined.

//Array methods
myArray.push(100) //adds element at the last
// console.log(myArray);

let popElement = myArray.pop();
// console.log(popElement); //removes last element

let unshiptElement = myArray.unshift(10);
// console.log(myArray); //adds element at the start of the array

let shiftElement = newArray.shift();
// console.log(shiftElement); //removes the first element

//includes
let checkElement = myArray.includes(9);
// console.log(checkElement);//checks the element whether it is present or not. 

let indexFind = myArray.indexOf(10);
// console.log(indexFind); //find the position of the element in the array

// console.log(myArray);

//slice and splice methods.
let Array1 = [1,3,5,7,9,11];

let slicePart = Array1.slice(1,4);
console.log(slicePart); //slice doesn't change the original array.
// console.log(Array1); //last index's element is not included.


let splicePart = Array1.splice(1,4);
console.log(splicePart); //this permanently changes slice the array
console.log(Array1); //we'll get the remaining elements after slicing. 

