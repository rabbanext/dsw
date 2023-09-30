let mainNavLinks = document.querySelectorAll(".toc-nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 75;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});
