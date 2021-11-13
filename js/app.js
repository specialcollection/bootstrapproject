// START HEADER

// for header 
const header = document.header;

// for navbuttons
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click', () => navbuttons.classList.toggle('changes'));

// for navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const getscrolly = window.scrollY;
    // console.log(getscrolly);

    if (getscrolly >= 200) {
        navbar.classList.add('navmenus');
    } else {
        navbar.classList.remove('navmenus');
    }
});

// END HEADER

// START FAQ

const btnpluses = document.querySelectorAll(".btnplus")
// console.log(btnplus);

btnpluses.forEach(btnplus => {
    btnplus.addEventListener('click', () => {
        btnplus.classList.toggle('rotatebtn');
    });
});

// END FAQ

// START Student Counts
// END Student Counts

// START footer js
var year = document.getElementById('year');
year.textContent = new Date().getFullYear();
// END footer js