const menuBtn = document.querySelector('.mobile-bar');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('active');
    menuBar.classList.toggle('active');
    menuList.classList.toggle('active');
}