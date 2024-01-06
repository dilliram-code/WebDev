//Array some interesting concepts

const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
const Months = ['January', 'February', 'March', 'April'];
// Days.push(Months);
// console.log(Days); //This will give an array inside another array.

//concatenation of two arrays
let DaysAndMonths = Days.concat(Months);
// console.log(DaysAndMonths); //combines two arrays and returns a single arrays


//spread operator
let MonthsandDays = [...Months, ...Days ];
// console.log(MonthsandDays);


//An array nested inside another array which is nested inside another array
const another_array = [1,2,3,[1,3,5],9,5,[23, [4,6,7]]]
let real_usable_array = another_array.flat(Infinity);
// console.log(real_usable_array); //this removes all the nesting and returns a flat array.

//checking the array
// console.log(Array.isArray("Dilliram"));


//creating an array
// console.log(Array.from("Dilliram")); // returns array separating each element.

//Interesting case
// console.log(Array.from({name:"Diliram"})); //==> This returns an empty array.


//Array from different variables
let var1 = 100;
let var2 = 200;
let var3 = 300;

console.log(Array.of(var1, var2, var3));
