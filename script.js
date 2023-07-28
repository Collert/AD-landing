const cardsArray = document.querySelectorAll(".card")
const html = document.querySelector("html")

for (let i = 0; i<cardsArray.length; i++) {
    setTimeout(() => {
        cardsArray[i].classList.add("rendered");
    }, 250*i);
}
setTimeout(() => {
    html.classList.remove("first-load")
}, 250*cardsArray.length+1000);

document.querySelector(".menu-items").addEventListener("mousemove", e => {
    for (const card of cardsArray) {

        const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
})

document.querySelectorAll("div.card:has(a:not([href]))").forEach(element => {
    element.addEventListener("click", () => {
        html.classList.add("shake-error")
        element.classList.add("target")
        setTimeout(() => {
            html.classList.remove("shake-error")
            element.classList.remove("target")
        }, 2000);
    })
})