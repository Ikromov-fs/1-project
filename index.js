let __container = document.querySelector(".container");
let __slider = document.querySelector(".slider");
let __active = document.querySelector("#active");
let __line1 = document.querySelector("#line1");
let __line2 = document.querySelector("#line2");
let __line3 = document.querySelector("#line3");
let __line4 = document.querySelector("#line4");


__line1.addEventListener('click', () => {
    __slider.style.transform = "translateX(0)";
    __active.style.top = "0";
    // __container.style.background = "#cee646"
});
__line2.addEventListener('click', () => {
    __slider.style.transform = "translateX(-25%)";
    __active.style.top = "80px"
});
__line3.addEventListener('click', () => {
    __slider.style.transform = "translateX(-50%)"
    __active.style.top = "160px"
});
__line4.addEventListener('click', () => {
    __slider.style.transform = "translateX(-75%)"
    __active.style.top = "240px"
});

// let slider = document.querySelector("#slider");
// let active = document.querySelector("#active");
// let line1 = document.querySelector("#line1");
// let line2 = document.querySelector("#line2");
// let line3 = document.querySelector("#line3");
// let line4 = document.querySelector("#line4");
// let container = document.querySelector(".container");

// line1.addEventListener('click', () => {
//     slider.style.transform = "translateX(0)";
//     active.style.top = 0;
// });

// line2.addEventListener('click', () => {
//     slider.style.transform = "translateX(-25%)";
//     active.style.top = "80px";
// });

// line3.addEventListener('click', () => {
//     slider.style.transform = "translateX(-50%)";
//     active.style.top = "160px";
// });

// line4.addEventListener('click', () => {
//     slider.style.transform = "translateX(-75%)";
//     active.style.top = "240px";
// });




