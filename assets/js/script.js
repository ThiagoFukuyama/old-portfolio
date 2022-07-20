
/**
 * Ativar Header ao scroll
*/

const header = document.querySelector("header")

const activate_header = () => {
    let screen_position = window.scrollY
    screen_position > 100 ? header.classList.add("active") : header.classList.remove("active") 
}

window.addEventListener("load", activate_header)
window.addEventListener("scroll", activate_header)



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

window.addEventListener("click", (e) => {
    if (e.target !== nav_list && e.target.parentElement !== nav_btns[0]) {
        nav_list.classList.remove("active")
    }
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
 * Efeito do mouse na Home
*/

const home = document.querySelector("#home")

home.addEventListener("mousemove", (e) => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return

    let effect_el = document.createElement("span")
    effect_el.classList.add("effect")
    let x = e.clientX
    let y = e.clientY

    effect_el.style.left = `${x}px`
    effect_el.style.top = `${y}px`

    home.appendChild(effect_el)

    setTimeout(() => {
        effect_el.remove()
    }, 500)
})



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
