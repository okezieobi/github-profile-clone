window.addEventListener('load', () => {
const input = document.querySelector('[header-input]');
const ul = document.querySelector('[header-input-list]');
const li = document.querySelector('[header-input-item]');
const mainDropdown = document.querySelector('[drop-list]');
const headerMenu = document.querySelector('[header-menu-icon]');

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
    
    headerMenu.addEventListener('click', () => {
        if (mainDropdown.classList.contains('hide-element')) mainDropdown.classList.remove('hide-element');
        else mainDropdown.classList.add('hide-element');
})
})