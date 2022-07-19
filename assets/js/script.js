
/**
 * Navbar responsiva
*/

const nav_list = document.querySelector(".navbar__list")
const nav_btns = document.querySelectorAll("[data-nav-btn]") 

nav_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.dataset.navBtn === "toggle") {
            nav_list.classList.toggle("active")
        } else if (btn.dataset.navBtn === "close") {
            nav_list.classList.remove("active")
        }
    })
})



/**
 * Tornar links da Navbar ativos
 */

const activate_links = () => {
    const navbar_links = document.querySelectorAll(".navbar__link")
    let screen_position = window.scrollY + 200
    
    navbar_links.forEach((link) => {
        const id = link.getAttribute("href").replace("/", "")
        const section = document.querySelector(id)

        link.addEventListener("click", () => nav_list.classList.remove("active"))
        if (screen_position >= section.offsetTop - 100 && screen_position <= ((section.offsetTop - 100) + section.offsetHeight)) {
            link.classList.add("active")
        } else {
            link.classList.remove("active")
        }
    })
}

window.addEventListener("load", activate_links)
window.addEventListener("scroll", activate_links)



/**
 * Animar elementos ao scroll
*/

const animation_elements = document.querySelectorAll("[data-animate]")
const animation_children = document.querySelector("[data-animate-children]")

const animate = () => {
    let screen_position = window.innerHeight
    animation_elements.forEach((elemento) => {
        let element_position = elemento.getBoundingClientRect().top
        if (element_position < screen_position - 100) {
            elemento.classList.add("animate")
        } 
    })

    let ac_position = animation_children.getBoundingClientRect().top
    if (ac_position < screen_position - 100) {
        let delay_base = 1
        animation_children.querySelectorAll("[data-animate-children] > *").forEach((child) => {
            child.classList.add("animate")
            child.style.transitionDelay = `${delay_base * 0.25}s`
            delay_base++
        })
    }
}

window.addEventListener("load", animate)
window.addEventListener("scroll", animate)
