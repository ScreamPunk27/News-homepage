const openBtn = document.querySelector('.nav__hamburger');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.nav__menu');

openBtn.addEventListener('click',()=>{
    menu.style.right="0";
    menu.style.animation="mostrar .5s ease-in both";
    
})

closeBtn.addEventListener('click',()=>{
    menu.style.right="-100%";
    menu.style.animation="ocultar .5s ease-in both";
});