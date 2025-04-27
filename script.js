const box_search = document.getElementById('box_search')
const nav_menu = document.getElementById('nav-menu')
const header = document.querySelector('header')


document.getElementById('btn_search').addEventListener('click',()=>{
    box_search.classList.toggle("active") ;
})

document.getElementById('menu-resp').addEventListener('click',()=>{
    nav_menu.classList.toggle("active") ;
})

window.addEventListener('scroll',()=>{
    header.classList.toggle("active", window.scrollY > 0) ;
})