//singleton
//object literals

const JsUser = {
    name: "Dilliram",
    location: "Soratkhutte",
    degree: "Master",
    "full name": "Dilli Ram Chaudhary",
    age: 29,
    email: "chaudharydr27@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['full name']);


//Assign of object
const object1 = {a:1, b:2, c:3};
const object2 = {name: "Hilary", address: "Kathmandu"};
const object3 = {day: "Sunday", month: "January", year: 2080}

let assignedObject = Object.assign({}, object1, object2, object3);
// console.log(assignedObject); this assigns all the objects in a single object

//let's change the element of the object
object1.a = 3;
// console.log(object1.a)

//we can also add some new element to the pre-existing object
object1.d = 4;
// console.log(object1.d)

//using spread operator for the objects
let combinedObject = {...object1, ...object2, ...object3};
// console.log(combinedObject);


 //array of objects

 const users = [
    {
        id: 123,
        name: "Sohan",
        address: "Kathmandu"
    }, 
    {
    },
    {

    }

 ]

 //Accessing the element of the object inside array
// console.log(users[0].id);


//accessing the keys only from the object
// console.log(Object.keys(JsUser)); //The noticeable thing is that it returns an array of the keys


//accessing the values only from the object
// console.log(Object.values(JsUser));  //the values are in the array



//entries (used very rarely) ==> gives the array
// console.log(Object.entries(JsUser));


// console.log(JsUser.hasOwnProperty('isLoggedIn'))
// console.log(JsUser.hasOwnProperty('isloggedOut'))


