//Making The Icon In The Header Active <Start>
let icon = document.querySelector("#icon"); // If We Want To Use The Class Name Instead Of The Id => (".icon")
let ul = document.querySelector("#ul");

icon.addEventListener("click", (click) => { // (Click) => can Be Any Name
    click.stopPropagation(); // Prevents the click event from propagating to the document
    if (ul.style.display === "block") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
});

document.addEventListener("click", () => {
    ul.style.display = "none";
});
//*****<End>*****

//<Start> The Scroll  
const serviceLink = document.getElementById("link1");
serviceLink.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: document.querySelector(".services").offsetTop,
        behavior: "smooth"
    })
});
const protfolioLink = document.getElementById("link2");
protfolioLink.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: document.querySelector(".protfolio").offsetTop,
        behavior: "smooth"
    })
});
const aboutLink = document.getElementById("link3");
aboutLink.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: document.querySelector(".about").offsetTop,
        behavior: "smooth"
    })
});
const contactLink = document.getElementById("link4");
contactLink.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: document.querySelector(".contact").offsetTop,
        behavior: "smooth"
    })
});

//<End> The Scroll  