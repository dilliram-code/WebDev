'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]); 
*/


/////////////////////////////////////////////////
//Array methods

/* let arr = ['a', 'b', 'c', 'd', 'e'];

slice method
console.log(arr.slice(0, 5));
console.log(arr.slice(-1));
console.log(arr.slice(-1, -3));

*/

//to shallow copy the original array using slice method
// console.log(arr.slice());
// let newArray = arr.slice([...arr]) //This will return the original array without mutating.


//at method
// let primeNumbers = [2, 3, 5, 7, 11];

//getting the last element
// console.log(primeNumbers.at(-1));
// console.log(primeNumbers[primeNumbers.length - 1]);
// console.log(primeNumbers.slice(-1));  //This will return an array
// console.log(primeNumbers)

//To get the element from the array above, we need to put the index of the sliced array
// console.log(primeNumbers.slice(-1)[0])


//for operator
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You have deposited ${movement}.`);
  } else {
    console.log(`You have withdrew ${Math.abs(movement)}`)
  }
}

*/
// console.log("----------------------------------------------");

//higher order function forEach

/* movements.forEach(movement => {
  if (movement > 0) {
    console.log(`You have deposited ${movement}.`);
  } else {
    console.log(`You have withdrew ${Math.abs(movement)}`)
  }
}) */



