const openBtn = document.querySelector('.nav__hamburger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.nav__menu');

openBtn.addEventListener('click',()=>{
    menu.style.left="0";
})

closeBtn.addEventListener('click',()=>{
    menu.style.left="-100%";
});