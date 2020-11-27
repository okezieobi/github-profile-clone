window.addEventListener('load', () => {
const input = document.querySelector('input');
const ul = document.querySelectorAll('ul')[0];
const li = document.querySelectorAll('li')[1];

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