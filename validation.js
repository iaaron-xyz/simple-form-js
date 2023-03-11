// form elements
const form = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');
const email = document.getElementById('mail');
const pass = document.getElementById('pass');
// Error elements
const errorEmail = document.querySelector('.error-mail');
const errorCountry = document.querySelector('.error-country');
const errorPass = document.querySelector('.error-pass');
const errorPassConf = document.querySelector('.error-pass-confirmation');
// inputs
const inputs = Array.from(document.querySelectorAll('input'));

// Avoid sumbit the form in any case
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
})
// Correct email validation
function validateMyEmail() {
  if (email.validity.typeMismatch) {
    email.classList.remove('valid');
    email.classList.add('invalid');
    errorEmail.innerHTML = 'Not valid format for email';
  } else {
    email.classList.remove('invalid');
    email.classList.add('valid');
    errorEmail.innerHTML = '';
  }
}
// Validate fields that are required
function checkRequired(e) {
  const input = document.getElementById(e.target.id);
  const errorInput = document.querySelector(`.error-${e.target.id}`);
  if (input.validity.valueMissing) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    errorInput.innerHTML = 'Please fill this field';
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorInput.innerHTML = '';
  }
}
// validate password length
function validatePassLength(e) {
  if (e.target.value.length < 5) {
    e.target.classList.add('invalid-pass');
    e.target.classList.remove('valid');
    e.target.classList.remove('invalid');
    console.log(e.target.classList);
    errorPass.innerHTML = 'Password must be <strong>5</strong> characters minimum.'
  } else {
    e.target.classList.remove('invalid-pass');
    e.target.classList.add('valid');
    console.log(e.target.classList);
  }
}

// General checks
inputs.forEach(input => {
  document.getElementById(input.id).addEventListener('invalid', checkRequired);
  document.getElementById(input.id).addEventListener('input', checkRequired);
});
// email
email.addEventListener('input', validateMyEmail);
// pass
pass.addEventListener('input', validatePassLength);