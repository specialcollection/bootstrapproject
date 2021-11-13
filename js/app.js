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
.counts - main - container{
    /*height: 35vh;*/
    background: linear - gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background - repeat: no - repeat;
    background - position: top;
    background - size: cover;

    /*padding: 105px 0;*/
    margin: -8px;
}

.counts - container{
    width: 100 %;
    /*height: inherit;*/

    padding: 15px 0;

    display: flex;
    justify - content: center;
    align - items: center;
    flex - wrap: wrap;

    position: relative;
}

.counts - title{
    color: rgba(255, 255, 255, 1);
    font - size: 3rem;
    /*text-shadow: 2px 2px 4px yellow,2px 2px 4px red;*/
    text - shadow: 0 2px 5px rgba(206, 208, 214, 1);
    letter - spacing: 5px;

    /*border-bottom: 2px solid rgba(255,255,255,0.6);*/

    position: absolute;
    top: -15px;
}

.counts - div - title{
    width: 100 %;
    height: inherit;

    padding: 25px;

    display: flex;
    justify - content: center;
    align - items: start;
}

.counts - div{
    width: 200px;
    height: 200px;
    background - color: transparent;
    color: #fff;

    border: 2px solid rgba(255, 255, 255, 0.8);
    /*box-shadow: 0 0 5px rgba(13,17,55,1);*/

    margin: 30px;

    display: flex;
    justify - content: center;
    align - items: center;

    position: relative;
}

.counts - circle{
    width: 66 %;
    height: 66 %;
    background - color: transparent;

    border: 2px solid rgba(255, 255, 255, 0.8);
    border - radius: 50 %;
    box - shadow: 0 0 10px rgba(13, 17, 55, 1);

    /*padding: 10px;*/

    position: absolute;
    top: 10 %;
    left: 17 %;
}

.counts - circle span{
    /*color: rgba(13,17,55,1);*/
    font - size: 2.3rem;
    /*text-shadow: 2px 0 10px rgba(13,17,55,1);*/

    position: absolute;
    top: 50 %;
    left: 50 %;

    transform: translate(-50 %, -50 %);
}

.counts - div p{
    font - size: 1.3rem;
    text - shadow: 2px 2px 2px rgba(13, 17, 55, 1);
    position: absolute;
    bottom: -10px;
}

.counts - div: nth - of - type(2){
    animation - name: counts - ani - left;
    animation - duration: 0.5s;
    animation - timing - function: ease-in;
    animation - iteration - count: 1;
}

.counts - div: nth - of - type(3){
    animation - name: counts - ani - down;
    animation - duration: 0.5s;
    animation - timing - function: ease-in;
    animation - iteration - count: 1;
}

.counts - div: nth - of - type(4){
    animation - name: counts - ani - up;
    animation - duration: 0.5s;
    animation - timing - function: ease-in;
    animation - iteration - count: 1;
}

.counts - div: nth - of - type(5){
    animation - name: counts - ani - right;
    animation - duration: 0.5s;
    animation - timing - function: ease-in;
    animation - iteration - count: 1;
}
@keyframes counts - ani - left{
    0 % {
        transform: translateX(-20px);
    }

    100 % {
        transform: translateX(0px);
    }
}

@keyframes counts - ani - down{
    0 % {
        transform: translateY(20px);
    }

    100 % {
        transform: translateY(0px);
    }
}

@keyframes counts - ani - up{
    0 % {
        transform: translateY(-20px);
    }

    100 % {
        transform: translateY(0px);
    }
}

@keyframes counts - ani - right{
    0 % {
        transform: translateX(20px);
    }

    100 % {
        transform: translateX(0px);
    }
}
// END Student Counts
// START footer js
var year = document.getElementById('year');
year.textContent = new Date().getFullYear();
// END footer js