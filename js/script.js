// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// menu clicked
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// hide nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})