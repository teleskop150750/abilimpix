const btnNavOpen = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const { body } = document;

const addPadding = () => {
  const elements = document.querySelectorAll('.js-scroll');
  elements.forEach((item) => {
    const el = item;
    const { paddingRight } = getComputedStyle(item);
    el.style.paddingRight = `${parseFloat(paddingRight) + window.innerWidth - document.documentElement.clientWidth}px`;
  });
};

const removePadding = () => {
  const elements = document.querySelectorAll('.js-scroll');
  elements.forEach((item) => {
    const el = item;
    const { paddingRight } = getComputedStyle(item);
    el.style.paddingRight = `${parseFloat(paddingRight) - (window.innerWidth - document.documentElement.clientWidth)}px`;
  });
};

const navOpen = () => {
  addPadding();
  body.classList.add('page__body--lock');
  nav.classList.add('nav--open');
};

const navClose = (e) => {
  if (!e.target.classList.contains('nav__list')) {
    body.classList.remove('page__body--lock');
    removePadding();
    nav.classList.remove('nav--open');
  }
};

btnNavOpen.addEventListener('click', navOpen);
nav.addEventListener('click', navClose);
