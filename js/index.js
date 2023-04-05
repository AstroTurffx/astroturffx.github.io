// Name thing
const final = "Hey, I'm Kevin"
const sym = "█▓░>/"
document.addEventListener("DOMContentLoaded", (event) => {
    let title = document.getElementById("ts-title");
    let og = title.innerHTML;

    let iteration = 0;
    let interval = setInterval(() => {
        title.innerText = title.innerText.split("").map((letter, index) => {
            if(index < iteration) {
                return final[index];
            }
        
            return sym[Math.floor(Math.random() * 5)]
        }).join("");
        
        if(iteration >= final.length){
            title.innerHTML = og;
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 20);

    // Parallax
    const images = document.getElementsByClassName("ts-parallax");
    const blobs = document.getElementsByClassName("ts-blobs");
    const slot = document.getElementById("ts-slot");
    const scroll = document.getElementById("ts-scroll-text")

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        slot.style.top = 0.6 * value + "px";
        scroll.style.bottom = `calc(5vh - ${2*value}px`;

        for (let i = 0; i < images.length; i++) {
            const element = images.item(i);
            element.style.top = 0.09 * (images.length - i - 1) * value + "px";
        }

        for (let i = 0; i < blobs.length; i++) {
            const element = blobs.item(i);
            element.style.top = `calc(125vh + ${-1.5 * (blobs.length - i) * value}px)`;
        }
    });
});
