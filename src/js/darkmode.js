const button = document.querySelector(".button");
const small = document.querySelector(".small")

const navbar = document.querySelector(".navbar");
const section = document.querySelector(".headersection");

button.addEventListener('click', () => {
    const bar = navbar.classList.contains("fulldark")

    navbar.classList.toggle("fulldark")
    section.classList.toggle("fulldark")

    console.log(bar)
    if (bar) {
        button.style.justifyContent = 'left';
    }
    else {
        button.style.justifyContent = 'right';
    }
});


