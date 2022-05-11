
const sobre_mim_text = document.querySelector(".sobre-mim__text")
const sobre_mim_img = document.querySelector(".sobre-mim__img")
const email_span = document.querySelector(".email")
const projetos_title = document.querySelector(".projetos__title")

const cards = [...document.querySelectorAll(".card")]

const elementos = [sobre_mim_text, sobre_mim_img, email_span, projetos_title]
const animations = ["slidesRight", "slidesLeft", "slidesUp", "slidesDown"]

window.addEventListener("scroll", () => {
    let screen_position = window.innerHeight

    for (let i = 0; i < elementos.length; i++) {
        let element_position = elementos[i].getBoundingClientRect().top
        let card_position = cards[i].getBoundingClientRect().top

        if (element_position < screen_position - 100) {
            elementos[i].classList.add(animations[i])
        }

        if (card_position < screen_position - 100) {
            cards[i].classList.add(animations[3])
        }
    }
    
})


