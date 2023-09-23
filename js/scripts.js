//Preloader___________________________________________________
window.addEventListener('load', document.body.classList.remove('loading'))

//URL sem Hash
const CLICKLINK = document.querySelectorAll('a[href^="#"]')
CLICKLINK.forEach((event) => {
    let eventId = event.getAttribute("href")


    event.addEventListener('click', (ev) => {
        ev.preventDefault()
        //Scroll to ID
        if (eventId) {
            document.querySelector(eventId).scrollIntoView({ block: "start", behavior: "smooth" });
        }
    })
})

//Skip Home___________________________________________________


//Active Scroll___________________________________________________
const SECTIONS = document.querySelectorAll('.section')
const MAINNAV = document.querySelector('.main-nav')
const STICKYNAV = document.querySelectorAll('.main-nav__link')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        STICKYNAV.forEach(link => {
            if (link.href.includes(entry.target.id)) {
                link.classList.toggle('main-nav__link--active', entry.isIntersecting)
            }
        })
    })
})

SECTIONS.forEach(section=> observer.observe(section))
