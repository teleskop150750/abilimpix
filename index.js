// Меню

const btnNavOpen = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const { body } = document;

// Добавить padding вместо скролла
const addPadding = () => {
  const elements = document.querySelectorAll('.js-scroll');
  elements.forEach((item) => {
    const el = item;
    const { paddingRight } = getComputedStyle(item);
    el.style.paddingRight = `${parseFloat(paddingRight) + window.innerWidth - document.documentElement.clientWidth}px`;
  });
};

// Удалить padding вместо скролла
const removePadding = () => {
  const elements = document.querySelectorAll('.js-scroll');
  elements.forEach((item) => {
    const el = item;
    const { paddingRight } = getComputedStyle(item);
    el.style.paddingRight = `${parseFloat(paddingRight) - (window.innerWidth - document.documentElement.clientWidth)}px`;
  });
};

// Открыть меню
const navOpen = () => {
  addPadding();
  body.classList.add('page__body--lock');
  nav.classList.add('nav--open');
};

// Закрыть меню
const navClose = (e) => {
  if (!e.target.classList.contains('nav__list')) {
    body.classList.remove('page__body--lock');
    removePadding();
    nav.classList.remove('nav--open');
  }
};

btnNavOpen.addEventListener('click', navOpen);
nav.addEventListener('click', navClose);

// Слайдер

const mySwiper = new Swiper('.swiper-container', {
  init: false,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-main-next',
    prevEl: '.swiper-button-main-prev',
  },
});

mySwiper.init();
