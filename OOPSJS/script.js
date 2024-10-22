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

const circle = createCircle(1);
circle.draw()

//Constructor Function