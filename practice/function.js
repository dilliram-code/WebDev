//Write a function which shows a random number from 1 to 6 of dice face. 
function dice() {
    return Math.floor(Math.random()*6) + 1;
}
result = dice();
console.log(result);