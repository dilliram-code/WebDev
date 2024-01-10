// function sayHello(){
//     console.log("Hello, man?");
// }

// setTimeout(sayHello, 4000);




//using arrow function
// console.log("first");
// console.log("Second");

// setTimeout(() => {
//     console.log("Hey, I will be logged after 4 seconds.")
// }, 4000);

// console.log("third");
// console.log("fourth");





//setTimeOut function
// const hello = () => {
//     console.log("Hello!")
// };

// setTimeout(hello, 3000);





//callBack function:
// A function passed in another function as an argument
// function summation(a,b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack(a,b);
// };

// calculator(1,2,summation);



//more on setTimeOut
// function getData(dataId){
//     //2s
//     setTimeout(() => {
//         console.log("data"+ dataId);
//     }, 2000)
// };

// getData(1);
// getData(2);
// getData(3);
//==>> PointToBeNoted:  all three results will be displayed simultaneously as they all initiate at the same time and the time for waiting is 2 sec. for all.






//CallBack HellCallback Hell: Nested callbacks stacked below another forming a pyramid structure (Pyramid of Doom)This style of programming becomes difficult to understand and manage

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if (getNextData){getNextData();}
//     }, 2000);
// }

// getData(1, ()=> {
//     getData(2, ()=> {
//         getData(3, ()=> {getData(4)});
//     });
// });




//Promise
// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise")
//     resolve("successful!");
//     // reject("rejected!");
// });






//Promise chaining!!
function aysncFunc1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success1");
        }, 4000);
       });
}

function aysncFunc2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success2");
        }, 6000);
       });
}

console.log("fetching data1");
let p1 = aysncFunc1();
p1.then((res) => {
    console.log(res);
});

console.log("fetching data2..");
let p2 = aysncFunc2();
p2.then((res)=> {
    console.log(res)
})