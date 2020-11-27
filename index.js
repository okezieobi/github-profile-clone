window.addEventListener('load', () => {
const input = document.querySelector('[header-input]');
const ul = document.querySelector('[header-input-list]');
const li = document.querySelector('[header-input-item]');

input.addEventListener('focus', () => {
    input.classList.add('input-grow')
    ul.classList.add('input-grow');
    li.classList.add('input-grow');
});

input.addEventListener('focusout', () => {
    input.classList.remove('input-grow')
    ul.classList.remove('input-grow');
    li.classList.remove('input-grow');
});
})