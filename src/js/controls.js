window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelectorAll('.box');
    const control = document.querySelectorAll('.control');
    let currentItem = 0;
    let pastItem = 1;
    const maxItems = 6;

    control.forEach(control => {
        control.addEventListener('click', (e) => {
            isLeft = e.target.classList.contains("arrow-left");

            if (isLeft) {
                currentItem -= 1;
                if (currentItem == 0) {
                    currentItem = maxItems - 1;
                }
            }
            else {
                currentItem += 1;
            }

            if (currentItem >= maxItems) {
                currentItem = 1;
            }

            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }

            console.log(currentItem);
            console.log("boxe:", box[currentItem - 1]);

            if (currentItem > 0) {
                box[currentItem - 1].scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
                console.log(currentItem - 1);
                console.log(pastItem);
                if (currentItem - 1 != pastItem) {
                    box[currentItem - 1].style.transform = "scale(0.9)";
                    box[currentItem - 1].style.boxShadow = "1px 1px 1px 1px rgba(255, 255, 255, 0.397)";

                    box[pastItem].style.transform = "scale(1)";
                    box[pastItem].style.boxShadow = "none";
                    pastItem = currentItem - 1;
                }

            }
        });
    })
});




