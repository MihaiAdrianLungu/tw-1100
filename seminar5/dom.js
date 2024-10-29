const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const spanCounter = document.getElementById('counter');

let counter = 0;

incrementBtn.addEventListener('click', () => {
    counter++;
    spanCounter.textContent = counter;
})

decrementBtn.addEventListener('click', () => {
    counter--;
    spanCounter.textContent = counter;
})