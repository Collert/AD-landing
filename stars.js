function spawnStar (temporary = true) {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${y}px`;
    star.style.left = `${x}px`;
    if (!temporary) {
        document.querySelector("#stars-underlay").appendChild(star)
        star.classList.add("permanent")
    } else {
        document.body.appendChild(star)
        setTimeout(() => {
            removeStar(star)
        }, 2500);
    }
}

function removeStar(starNode) {
    document.body.removeChild(starNode)
}

document.addEventListener("DOMContentLoaded", () => {

    const notReducedMotion = 0 + !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    for (let i=0; i<100; i++) {
        setTimeout(() => {
            spawnStar(temporary=false)
        }, 25*i*notReducedMotion);
    }
    if (notReducedMotion) {
        setInterval(() => {
            spawnStar()
        }, 700);
    }
})