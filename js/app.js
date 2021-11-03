// START FAQ

const btnpluses = document.querySelectorAll(".btnplus")
// console.log(btnplus);

btnpluses.forEach(btnplus=>{
    btnplus.addEventListener('click',()=>{
        btnplus.classList.toggle('rotatebtn');
    });
});

// END FAQ

// start footer js
var year = document.getElementById('year');
year.textContent = new Date().getFullYear();
// end footer js