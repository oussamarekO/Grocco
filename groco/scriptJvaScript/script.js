const search = document.querySelector('.search-btn');

const searchBar  = document.querySelector('.search-box');
const shop = document.querySelector('.shop-btn');
const list = document.querySelector('.grocery')
const user = document.querySelector('.log-btn');
const login = document.querySelector('.login');
const menuBar = document.querySelector('.menu-btn');
const menu = document.querySelector('.list');
const elements = Array.from(document.querySelectorAll('.list li a'));

elements.forEach((ele,i,elements)=>{
  ele.addEventListener('click',()=>{
    const active = document.querySelector('.active');
    active.classList.remove('active');
    ele.classList.toggle('active');
  })
});

search.addEventListener('click',()=>{
    list.classList.remove('open-grocery');
    login.classList.remove('open-log');
    menu.classList.remove('menu-open');
    searchBar.classList.toggle('apear');
})

shop.addEventListener('click', ()=> {
    searchBar.classList.remove('apear');
    login.classList.remove('open-log');
    menu.classList.remove('menu-open');
    list.classList.toggle('open-grocery');
});

user.addEventListener('click', ()=> {
    searchBar.classList.remove('apear');
    list.classList.remove('open-grocery');
    menu.classList.remove('menu-open');
    login.classList.toggle('open-log');

});

menuBar.addEventListener('click',()=>{
    list.classList.remove('open-grocery');
    login.classList.remove('open-log');
    searchBar.classList.remove('apear');
    menu.classList.toggle('menu-open');
});

var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // set the navbar
  