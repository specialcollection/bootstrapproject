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

// START COURSE
// Carddesign bookmark
let bookmarkcolors = document.querySelectorAll(".bookmark");
bookmarkcolors.forEach((bookmarkcolor) => {
    let text = bookmarkcolor.innerText.toLowerCase();
    if (text === 'free') {
        bookmarkcolor.style.borderColor = "red";
        bookmarkcolor.style.borderBottomColor = "transparent";
        bookmarkcolor.style.color = "white";
    }
    // console.log(text);
});
// console.log(bookmarkcolors);


// BreadCrumb filter
let navs = document.querySelectorAll(".breadcrumb-item");
let coursetitles = document.querySelectorAll(".mainbackground");
let seemorediv = document.querySelector(".seemore");
// console.log(navs, coursetitles);
navs.forEach((nav, index) => {
    nav.addEventListener('click', () => {
        // console.log(nav.getAttribute('data-categories'));
        let itemtype = nav.getAttribute('data-categories');
        coursetitles.forEach(coursetitle => {
            // console.log(coursetitle.getAttribute("data-categories"));
            let coursetype = coursetitle.getAttribute("data-categories");
            // console.log(itemtype, coursetype);
            if (itemtype !== coursetype && itemtype !== 'all') {
                coursetitle.style.display = "none";
                seemorediv.style.display = "none";
            } else if (itemtype == 'all') {
                coursetitle.style.display = "flex";
                seemorediv.style.display = "block";
                // console.log(itemtype);
            } else {
                coursetitle.style.display = "flex";
                seemorediv.style.display = "none";
                // coursetitle.style.height = "100px";
            }
        });
    });
});
// SearchBox Filter
// let searchinput = document.querySelector(".searchcourseinput");
// searchinput.addEventListener("keyup", () => {
//     coursetitles.forEach(coursetitle => {
//         let coursetype = coursetitle.getAttribute("data-categories");
//         if (searchinput.value === coursetype) {
//             coursetitle.classList.remove('hide');
//             coursetitle.classList.add('show');
//         } else {
//             coursetitle.classList.add('hide');
//             coursetitle.classList.remove('show');
//         }
//         console.log(searchinput.value, coursetitle);
//     });
//     // console.log(searchinput.value, coursescards.getAttribute("data-catageories"));

// });


// Page Navi button
let maxItem = 4;
let pagination;
let pageno = 1;
// button
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
//  button text 
let btntext = document.querySelector(".pnobtn");

window.addEventListener('resize', () => {
    let wsize = window.innerWidth;
    if (wsize <= 660) {
        maxItem = 1;
        showItems();
    } else if (wsize <= 975) {
        maxItem = 2;
        showItems();
    } else if (wsize <= 1300) {
        maxItem = 3;
        showItems();
    } else {
        maxItem = 4;
        showItems();
    }
});


prev.addEventListener("click", () => {
    pageno--;
    btndisable();
    showItems();
});
next.addEventListener("click", () => {
    pageno++;
    btndisable();
    showItems()
});
function btndisable() {
    if (pageno == pagination) {
        next.parentElement.classList.add("disabled");
    } else {
        next.parentElement.classList.remove("disabled");
    }
    if (pageno == 1) {
        prev.parentElement.classList.add("disabled");
    } else {
        prev.parentElement.classList.remove("disabled");
    }
}
function showItems() {
    pagination = Math.ceil(coursetitles.length / maxItem);
    for (let i = 0; i < coursetitles.length; i++) {
        coursetitles[i].style.display = "none";
        if (i >= (pageno * maxItem) - maxItem && i < pageno * maxItem) {
            coursetitles[i].style.display = "flex";
        }
        btntext.innerHTML = pageno;
    }
}
showItems();
btndisable();
// END COURSE
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

// Start About Us Section
const circles = document.querySelectorAll('.circles');
circles.forEach((circle)=>{
    // console.log(circle);
    circle.addEventListener('mouseenter',()=>{
        // console.log('hay');
        circle.parentNode.parentNode.classList.add('textshows');
    });

    circle.addEventListener('mouseleave',()=>circle.parentNode.parentNode.classList.remove('textshows'));
});
// End About Us Section


// START footer js
var year = document.getElementById('year');
year.textContent = new Date().getFullYear();
// END footer js