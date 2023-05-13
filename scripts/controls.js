window.addEventListener("DOMContentLoaded", (event) => {
    const box = document.querySelectorAll('.box');
    const control = document.querySelectorAll('.control');  
    let currentItem = 0;
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

            console.log(currentItem)
            console.log("boxe:", box[currentItem-1])

            if (currentItem > 0) {
                box[currentItem-1].scrollIntoView({
                    behavior: "smooth",
                    inline: "center", 
                    block: "nearest",
                });
            }
     
        });  
    })
});
    



