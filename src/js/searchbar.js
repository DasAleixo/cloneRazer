window.addEventListener("DOMContentLoaded", () => {
    const lupa = document.getElementById("lupa")
    const bar = document.getElementById("search")
    const fechar = document.getElementById("x")

    lupa.addEventListener('click', () => {
        flex = bar.style.display = 'flex'

        fechar.addEventListener('click', () => {
            bar.style.display = 'none'
        })
    })
});
