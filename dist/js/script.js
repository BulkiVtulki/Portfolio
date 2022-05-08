const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const value = document.querySelectorAll('.achievements__percent'),
    carrier = document.querySelectorAll('.achievements__line-orange');

value.forEach( (item, i) => {
    carrier[i].style.width = item.innerHTML;
});