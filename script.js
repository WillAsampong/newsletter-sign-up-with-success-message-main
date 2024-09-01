const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email)

    // if(validEmail.test(email)){
        
    // }
})

input.addEventListener('click', () => {
    input.classList.toggle('active');
    console.log('input');
});

button.addEventListener('click', () => {
    button.classList.toggle('active');
    console.log('button');
});

