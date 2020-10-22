const btnNavClose = document.querySelector('.nav__close');
const btnNavOpen = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

const navOpen = () => {
  nav.classList.add('nav--open');
};

const navClose = (e) => {
  if (!e.target.classList.contains('nav__list')) {
    nav.classList.remove('nav--open');
  }
};

btnNavOpen.addEventListener('click', navOpen);
btnNavClose.addEventListener('click', navClose, true);
nav.addEventListener('click', navClose);
