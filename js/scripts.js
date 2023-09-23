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

window.addEventListener('scroll', () => {
    SECTIONS.forEach(sec => {
        let halfWindowHeigh = window.innerHeight /2

        if(Math.floor(sec.getBoundingClientRect().top) <= halfWindowHeigh && Math.floor(sec.getBoundingClientRect().bottom) > halfWindowHeigh) {
            let sectionId = sec.id
            CLICKLINK.forEach(link=> {
                if(link.href.includes(sectionId)) {
                    link.classList.add('main-nav__link--active')
                } else {
                    link.classList.remove('main-nav__link--active')
                }
            })
        }
    })
})