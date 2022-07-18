
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

const scrolldown_btn = document.querySelector(".scroll-down-btn") 



/**
 * Tornar links da Navbar ativos ao scroll
*/

const nav_items = nav_list.querySelectorAll(".navbar__item");
const nav_links = nav_list.querySelectorAll(".navbar__link");

const activate_links = () => {
    let screen_position = window.scrollY + 200
    nav_links.forEach((link) => {
        const id = link.getAttribute("href")
        const section = document.querySelector(id)

        link.addEventListener("click", (e) => {
            e.preventDefault()
            nav_list.classList.remove("active")
            scroll_to_target(section)
        })
    
        if (screen_position >= section.offsetTop - 100 && screen_position <= ((section.offsetTop - 100) + section.offsetHeight)) {
            link.parentElement.classList.add("active")
        } else {
            link.parentElement.classList.remove("active")
        }
    })
}

// Função de scroll

const scroll_to_target = (target) => {
    scrollTo(0, target.offsetTop - 50)
}

window.addEventListener("scroll", activate_links)
window.addEventListener("load", activate_links)



/**
 * Animar elementos ao scroll
*/

const animation_elements = document.querySelectorAll("[data-animate]")
const animation_children = document.querySelector("[data-animate-children]")

const animate = () => {
    let screen_position = window.innerHeight
    animation_elements.forEach((elemento) => {
        let element_position = elemento.getBoundingClientRect().top

        if (element_position < screen_position - 200) {
            elemento.classList.add("animate")
        }
    })

    let ac_position = animation_children.getBoundingClientRect().top
    if (ac_position < screen_position - 200) {
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
