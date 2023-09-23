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
            document.querySelector(eventId).scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });
        }
    })
})

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

SECTIONS.forEach(section => observer.observe(section))

//Gallery
const GALLERY = document.querySelector('#gallery')
const GALLERYIMAGES = [
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '3' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '3' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '2' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '', spanY: '3' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '', spanY: '' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '', spanY: '2' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '4', spanY: '2' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '', spanY: '3' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '3' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '', spanY: '2' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '', spanY: '2' },
    { url: 'https://placehold.co/600x600', alt: 'Alt da Imagem', spanX: '2', spanY: '' }
]

function placeGallery() {
    GALLERYIMAGES.forEach(img => {
        let div = document.createElement('div')
        let image = document.createElement('img')
        let setStyle = ''
        image.setAttribute("src", img.url)
        image.setAttribute("alt", img.alt)



        if (img.spanX) setStyle += `grid-column: span ${img.spanX};`
        if (img.spanY) setStyle += `grid-row: span ${img.spanY};`

        div.setAttribute('style', setStyle)
        div.appendChild(image)

        GALLERY.appendChild(div)
    })
}
placeGallery()

//Side Scroll___________________________________________________
const STICKYCONTAINER = document.querySelector('.sticky-container')
const STICKY = document.querySelector('.sticky')

window.addEventListener('load', sizeStick)
window.addEventListener('resize', sizeStick)

function sizeStick() {
    let chidrenSize = 0
    Array.from(STICKY.children).forEach(child => chidrenSize += child.offsetWidth)

    STICKYCONTAINER.style.height = STICKYCONTAINER.scrollWidth - window.innerWidth / 2 + 'px'
}

window.addEventListener('scroll', stickyScroll)

function stickyScroll() {
    let offTop = STICKY.parentElement.getBoundingClientRect().top

    offTop = offTop > 0 ? 0 : offTop 
    STICKYCONTAINER.style.transform = `translateX(${offTop}px)`
}

