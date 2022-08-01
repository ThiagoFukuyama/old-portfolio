
/**
 * Ativar Header ao scroll
*/

const header = document.querySelector("header")

const activateHeader = () => {
    let screenPosition = window.scrollY
    screenPosition > 1 ? header.classList.add("active") : header.classList.remove("active") 
}

window.addEventListener("load", activateHeader)
window.addEventListener("scroll", activateHeader)



/**
 * Navbar responsiva
*/

const navList = document.querySelector(".navbar__list")
const navButtons = document.querySelectorAll("[data-nav-btn]") 

navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.dataset.navBtn === "toggle") {
            navList.classList.toggle("active")
        } else if (btn.dataset.navBtn === "close") {
            navList.classList.remove("active")
        }
    })
})

window.addEventListener("click", (e) => {
    if (e.target !== navList && e.target.parentElement !== navButtons[0]) {
        navList.classList.remove("active")
    }
})



/**
 * Tornar links da Navbar ativos
 */

const activateLinks = () => {
    const navbarLinks = document.querySelectorAll(".navbar__link")
    let screenPosition = window.scrollY + 150
    
    navbarLinks.forEach((link) => {
        const id = link.getAttribute("href")
        const section = document.querySelector(id)
        let sectionTop = section.offsetTop - 150

        link.addEventListener("click", () => navList.classList.remove("active")) 
        
        if (screenPosition >= sectionTop && screenPosition <= (sectionTop + section.offsetHeight)) {
            link.classList.add("active")
        } else {
            link.classList.remove("active")
        }
    })
}

window.addEventListener("load", activateLinks)
window.addEventListener("scroll", activateLinks)



/**
 * Efeito do mouse na Home
*/

const home = document.querySelector("#home")

home.addEventListener("mousemove", (e) => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return

    let effectElement = document.createElement("span")
    effectElement.classList.add("effect")
    let x = e.clientX
    let y = e.clientY

    effectElement.style.left = `${x}px`
    effectElement.style.top = `${y}px`

    home.appendChild(effectElement)

    setTimeout(() => {
        effectElement.remove()
    }, 500)
})



/**
 * Animar elementos ao scroll
*/

const animationElements = document.querySelectorAll("[data-animate]")
const animationChildrenElements = document.querySelector("[data-animate-children]")

const animate = () => {
    let screenPosition = window.innerHeight
    animationElements.forEach((element) => {
        let element_position = element.getBoundingClientRect().top
        if (element_position < screenPosition - 150) {
            element.classList.add("animate")
        } 
    })

    let animateChildrenPosition = animationChildrenElements.getBoundingClientRect().top
    if (animateChildrenPosition < screenPosition - 150) {
        let delayBase = 1
        animationChildrenElements.querySelectorAll("[data-animate-children] > *").forEach((child) => {
            child.classList.add("animate")
            child.style.transitionDelay = `${delayBase * 0.25}s`
            delayBase++
        })
    }
}

window.addEventListener("load", animate)
window.addEventListener("scroll", animate)
