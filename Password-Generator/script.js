let inputSlider = document.getElementById('rangeSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('generate');
let copy = document.getElementById('copy');



// Showing Password length value by default
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
})

// click function to generate password
genBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
})

// Password values
let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
let allNumbers = '0123456789';
let allSymbols = '!@#$%&*()_+~|}{[]:';

// function to generate the Password
function generatePassword() {
  let password = '';
  let allChars = '';

  allChars += lowercase.checked ? lowerChars : '';
  allChars += uppercase.checked ? upperChars : '';
  allChars += numbers.checked ? allNumbers : '';
  allChars += symbols.checked ? allSymbols : '';

  if (allChars == '' || allChars.length == 0) {
    return password;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return password;
}

copy.addEventListener('click', () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copy.innerText = 'check';
    copy.title = 'Password Copied';
    setTimeout(() => {
      copy.innerText = 'content_copy';
    }, 3000)
  }
});