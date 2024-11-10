const  img = document.getElementById("mainImg");
console.log(img);

//Log the object of img
console.dir(img);  

//log tagName
console.log(img.tagName);

//Log the src of image
console.log(img.src);

//Manipulate the src of image
img.src = 'assets/section--1.jpg' //This changes the targeted image

//Get the element by ID
console.log(document.getElementById('description'));

//Select the element by their classes
const nameClass = document.getElementsByClassName('oldImg');
console.log(nameClass);

//Log smallimages
//Things to note below: smallimages returns an array so we can apply for loop
let smallimages = document.getElementsByClassName('oldImg');
for (let i = 0; i < smallimages.length; i++) {
  console.dir(smallimages[i]);
}