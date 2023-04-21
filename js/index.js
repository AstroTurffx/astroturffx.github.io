// Green sock
gsap.registerPlugin(ScrollTrigger);

// Title section animations
const ts = gsap.timeline();
const ts_ids = ["slot","scroll-text","p0","p1","p2","p3","p4","p5","p6","p7","p8","p9","b0","b1","b2","b3"];
const ts_values = [0.6,2,0.81,0.72,0.63,0.54,0.45,0.36,0.27,0.18,0.09,0,-6,-4.5,-3,-1.5];

ScrollTrigger.create({
    trigger: "#all",
    animation: ts,
    scrub: true, // 3
    start: 0, // header gets in the way :[
    end: innerHeight * 1.5
});

for (let i = 0; i < ts_ids.length; i++) {
    ts.to("#ts-"+ts_ids[i], { y: (ts_values[i] * innerHeight) }, 0);
}

// Project secion animations
const create_trigger = (start, end, scrub, markers, pin) => {return{trigger:"#ps",start:start,end: end+" bottom",anticipatePin:pin!=null,scrub,pin,markers}};
const create_timeline = (start, end, scrub, markers, pin) => {
    let timeline = gsap.timeline();
    let settings = create_trigger(start, end, scrub, markers, pin);
    settings.animation = timeline;
    ScrollTrigger.create(settings);
    return timeline;
}

// Create the pin
create_timeline("62.5px top", "bottom", true, false, "#ps-content");

// 12.5% = 50vh | 43.75% = 175vh
gsap.to("#ps", {
    backgroundColor: "#740c9a",
    scrollTrigger: create_trigger("12.5% center", "43.75%", true, false)
})

let ps = create_timeline("30% center", "43.75%", 1, false);
ps.to("#ps-title > p", { opacity: 0 })
ps.to("#ps-title-text", { color: "#ff218c", "--value": "100%" })

let ps_content = create_timeline("43.75% center", "100%", 0.5, false)
ps_content.to("#ps-content", { x: -innerWidth * 2, ease: "power1.inOut" })

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
});