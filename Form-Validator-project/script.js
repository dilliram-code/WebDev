let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');


//Show input error message
function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = 'form-control error';
  let small = formControl.querySelector('small');
  small.innerText = message;
}

//Show input success message
function showSuccess(input, message) {
  let formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}



//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  })
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max}`)
  } else {
    showSuccess(input);
  }
}

//Check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

//Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Event Listners
form.addEventListener('submit', function (e) {
  e.preventDefault();



  // if (username.value === '') {
  //   showError(username, "Username is required.")
  // } else {
  //   showSuccess(username);
  // }
  // if (email.value === '') {
  //   showError(email, "Email is required.")
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Email is not valid.")
  // }
  // else {
  //   showSuccess(email);
  // }
  // if (password.value === '') {
  //   showError(password, "Password is required.")
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === '') {
  //   showError(password2, "Password is required.")
  // } else {
  //   showSuccess(password2);
  // }




  //The code above is not scalable and very inefficient so we are going to replace it with more cleaner code.
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(input);
  checkPasswordMatch(password, password2);
})