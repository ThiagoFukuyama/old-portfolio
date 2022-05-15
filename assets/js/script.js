
const elementos = document.querySelectorAll("[data-animate]")
const cards_container = document.querySelector("[data-animate-children]")

window.addEventListener("scroll", () => {
    let screen_position = window.innerHeight

    elementos.forEach((elemento) => {
        let element_position = elemento.getBoundingClientRect().top

        if (element_position < screen_position - 100) {
            elemento.classList.add("animate")
        }
    })


    let cards_position = cards_container.getBoundingClientRect().top

    if (cards_position < screen_position - 200) {
        let delay_base = 1
        cards_container.querySelectorAll(".card").forEach((card) => {
            card.classList.add("animate")
            card.style.transitionDelay = `${delay_base * 0.25}s`
            delay_base++
        })
    }
})
