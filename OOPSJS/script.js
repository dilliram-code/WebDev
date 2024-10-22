//Creating object using object literals 
const cirlce = {
  radius: 1,
  location: {
    x: 2,
    y: 3
  },
  draw: function () {
    console.log("drawing");
  }
}
// cirlce.draw()


//Factory Function ==> Better way to create an object if it has a method
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("drawing");
    }
  }
}

// const circle = createCircle(1);
// circle.draw()

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  }
}

const another = new Circle(1);

//Primitive and reference Types

//Primitive type ==> copy by the value
let x = 10;
let y = x;

// console.log("The value of y: ", y)
// console.log("The value of x: ", x)


//Reference types
let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);