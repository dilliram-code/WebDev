//de-structure of an object
let myObject = {
    rollNO: 1,
    class: 10,
    Name: "Rakesh",
    address: "Sindhuli",
    subjects: ['Maths', "Science", 'English'],
    courseInstructor: "Chudamani Rajaure"
}

//de-structuring an object
//here, the key=> courseInstructor is set as instructor using object de-structure.
let {courseInstructor: instructor} = myObject;
console.log(instructor);
