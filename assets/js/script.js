
const animate_elements = document.querySelectorAll("[data-animate]")
const animate_children = document.querySelector("[data-animate-children]")

window.addEventListener("scroll", () => {
    let screen_position = window.innerHeight

    animate_elements.forEach((elemento) => {
        let element_position = elemento.getBoundingClientRect().top

        if (element_position < screen_position - 150) {
            elemento.classList.add("animate")
        }
    })


    let ac_position = animate_children.getBoundingClientRect().top

    if (ac_position < screen_position - 150) {
        let delay_base = 1
        animate_children.querySelectorAll("[data-animate-children] > *").forEach((child) => {
            child.classList.add("animate")
            child.style.transitionDelay = `${delay_base * 0.25}s`
            delay_base++
        })
    }
})
