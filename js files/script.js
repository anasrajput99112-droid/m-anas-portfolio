let menubtn = document.getElementById('menu-bar');
let navlink = document.getElementById('nav-links');

menubtn.addEventListener('click', () => {
    navlink.classList.toggle('active');
})