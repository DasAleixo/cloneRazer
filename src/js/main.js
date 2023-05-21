window.addEventListener("DOMContentLoaded", (event) => {
    //mudar cor texto
    const test = document.getElementById("test");
    function newcolor(color, evt) {
        for (i = 0; i <= 10; i += 1) {
            var imgid = `img${i}`;
            if (evt.target.id == imgid) {
                var txt = document.getElementById(`txt${i}`);
                txt.style.color = color
            }
        }
    }
    test.addEventListener('mouseover', (event) => { newcolor('rgb(67, 255, 98)', event) })
    test.addEventListener('mouseout', (event) => { newcolor('white', event) })
    //--------------------------------------------------------------------------------------

    //menu hamburguer
    const menu = document.getElementById("menu");
    const sidebar = document.getElementById("sidebar")

    menu.addEventListener('click', function () {
        if (sidebar.style.display == 'block') {
            sidebar.style.visibility = 'hidden';
            sidebar.style.display = 'none';
        }
        else {
            sidebar.style.translate = 25
            sidebar.style.display = 'block'
            sidebar.style.visibility = 'visible';
        }
    });

})

