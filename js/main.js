const burger = document.querySelector('.burger');
const headerContent = document.querySelector('.header__content');

burger.addEventListener('click', () => {
    headerContent.classList.toggle('header__content-open');
    burger.classList.toggle('burger-close');
});
