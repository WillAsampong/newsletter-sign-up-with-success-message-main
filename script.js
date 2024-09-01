const emailInput = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const mainContainer = document.querySelector('main-container');
const success = document.querySelector('success');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email);
})

emailInput.addEventListener('click', () => {
    input.classList.toggle('active');
    console.log('input');
});

button.addEventListener('click', () => {
    button.classList.add('active');
    console.log('button');
});

