const emailInput = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const mainContainer = document.querySelector('.main-container');
const success = document.querySelector('.success');
const error = document.querySelector('.error');
const emailValue = document.querySelector('#email-value');
const dismissButton = document.querySelector('.dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email);

    if(validEmail.test(email)){
        success.style.display = 'block';
        emailValue.innerHTML = email;
        mainContainer.style.display = 'none';
        console.log('success');
    } else {
        success.style.display = 'none';
        error.innerHTML = 'valid email required';
        console.log('error');
    }
});

dismissButton.addEventListener('click', () => {
    success.style.display = 'none';
    mainContainer.style.display = 'block';
    email.value = ''
})

emailInput.addEventListener('click', () => {
    emailInput.classList.toggle('active');
    // emailInput.classList.toggle('error');
});

button.addEventListener('click', () => {
    button.classList.add('active');
});

