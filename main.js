let iconOpen = document.querySelector(".icon-hamburger");
let iconClose = document.querySelector(".icon-close");
let ul = document.querySelector("nav ul");

iconOpen.onclick = function () {
    iconOpen.classList.add("hide");
    iconClose.classList.add("show");
    ul.classList.add("show");
};

iconClose.onclick = function () {
    iconOpen.classList.remove("hide");
    iconClose.classList.remove("show");
    ul.classList.remove("show");
};