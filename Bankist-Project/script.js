'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));


// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
/*=============== SELECTING ELEMENTS============= */

/* 
console.log(document.documentElement)
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1')

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

/*========== CREATING AND INSERTING ELEMENTS ===========*/
//insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';

// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// //beore and after
// // header.before(message);
// // header.after(message);

// //Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove();
// })


// Create the message element and set its content

/* const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';

// Append the message to the header
header.append(message);

// Now, add the event listener after the message is appended to the DOM
document.querySelector('.btn--close--cookie').addEventListener('click', function() {
  message.remove();  //This method has arrived recently 
  //Alternative: message.parentElement.removeChild(message);
});

//Styles for the message
message.style.backgroundColor = '#00416A';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+ 30 +'px'; 

//Change CSS variable
document.documentElement.style.setProperty(
  '--color-primary', 'orangered'
);

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

//We not only read but also create the attribute
logo.alt = 'Beautiful minimilist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

//let's see on link
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));


//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'k');
logo.classList.remove('c', 'p');
logo.classList.toggle('c');
logo.classList.contains('c'); //not include

//Don't use
// logo.className = 'Dilliram';
//This ends the topic and afterwards we are going to start our project
*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());


  //The property pageXOffset and pageOffsetY have been deprecated. 
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);
});