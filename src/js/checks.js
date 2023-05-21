window.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelectorAll(".img")
    const check = document.querySelectorAll(".check")
    let currentItem = 0

    let pastItem = 1

    img[currentItem].classList.add('active');

    check.forEach(check => {
        check.addEventListener('click', (e) => {
            currentItem = e.target.id;
            console.log(img[currentItem-1])

            if (currentItem < 4 && pastItem != currentItem-1) {
                img[currentItem-1].classList.add('active');
                img[pastItem].classList.remove('active')
                pastItem = currentItem-1
                console.log(pastItem)
                console.log(currentItem-1)
            }

        });
    })
});