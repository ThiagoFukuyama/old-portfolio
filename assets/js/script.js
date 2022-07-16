
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
            scrollTo(0, (section.offsetTop - 50))
        })
    
        if (screen_position >= (section.offsetTop - 100)) {
            remove_active_items()
            link.parentElement.classList.add("active")
        } 
    })
}

const remove_active_items = () => {
    nav_items.forEach((item) => {
        item.classList.remove("active")
    })
}

window.addEventListener("scroll", activate_links)
window.addEventListener("load", activate_links)



/**
 * Animar elementos ao scroll
*/

const animate_elements = document.querySelectorAll("[data-animate]")
const animate_children = document.querySelector("[data-animate-children]")

window.addEventListener("scroll", () => {
    let screen_position = window.innerHeight

    animate_elements.forEach((elemento) => {
        let element_position = elemento.getBoundingClientRect().top

        if (element_position < screen_position - 200) {
            elemento.classList.add("animate")
        }
    })


    let ac_position = animate_children.getBoundingClientRect().top

    if (ac_position < screen_position - 200) {
        let delay_base = 1
        animate_children.querySelectorAll("[data-animate-children] > *").forEach((child) => {
            child.classList.add("animate")
            child.style.transitionDelay = `${delay_base * 0.25}s`
            delay_base++
        })
    }
})
