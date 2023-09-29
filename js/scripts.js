const GALLERY = document.querySelector('#gallery')
const GALLERYIMAGES = [
    { url: 'assets/images/grid/grid_01.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '3' },
    { url: 'assets/images/grid/grid_02.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '3' },
    { url: 'assets/images/grid/grid_03.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '2' },
    { url: 'assets/images/grid/grid_04.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '' },
    { url: 'assets/images/grid/grid_05.jpg', alt: 'Alt da Imagem', spanX: '', spanY: '3' },
    { url: 'assets/images/grid/grid_06.jpg', alt: 'Alt da Imagem', spanX: '', spanY: '' },
    { url: 'assets/images/grid/grid_07.jpg', alt: 'Alt da Imagem', spanX: '', spanY: '2' },
    { url: 'assets/images/grid/grid_08.jpg', alt: 'Alt da Imagem', spanX: '4', spanY: '2' },
    { url: 'assets/images/grid/grid_09.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '' },
    { url: 'assets/images/grid/grid_10.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '' },
    { url: 'assets/images/grid/grid_11.jpg', alt: 'Alt da Imagem', spanX: '', spanY: '3' },
    { url: 'assets/images/grid/grid_12.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '3' },
    { url: 'assets/images/grid/grid_13.jpg', alt: 'Alt da Imagem', spanX: '', spanY: '2' },
    { url: 'assets/images/grid/grid_14.jpg', alt: 'Alt da Imagem', spanX: '', spanY: '2' },
    { url: 'assets/images/grid/grid_15.jpg', alt: 'Alt da Imagem', spanX: '2', spanY: '' }
]


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
const STICKYNAV = document.querySelectorAll('.main-nav__link')
const NAVSECTIONS = document.querySelectorAll('.main-nav__anchor')

const observerSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('section--active', entry.isIntersecting)
    })
}, { rootMargin: '-30%' })

SECTIONS.forEach(section => observerSection.observe(section))

const observerLink = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var sectionID = '#'+entry.target.dataset.anchor

        STICKYNAV.forEach(link => {
            if(link.href.includes(sectionID)) link.classList.toggle('main-nav__link--active', entry.isIntersecting)
        })
    })
}, { rootMargin: '-30%' }
)
NAVSECTIONS.forEach(navSection => observerLink.observe(navSection))

//Gallery
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
const NAVBAR = document.querySelector('.main-nav')

window.addEventListener('load', sizeStick)
window.addEventListener('resize', sizeStick)

function sizeStick() {
    STICKYCONTAINER.style.height = STICKYCONTAINER.scrollWidth - window.innerWidth / 2 + 'px'
}

window.addEventListener('scroll', stickyScroll)

function stickyScroll() {
    let offTop = STICKY.parentElement.getBoundingClientRect().top

    NAVBAR.classList.toggle('main-nav--active', offTop <= 0)

    offTop = offTop > 0 ? 0 : offTop

    STICKYCONTAINER.style.transform = `translateX(${offTop}px)`
}

//Responsive Menu Toggle_____________________________________________________________________
const BURGUER = document.querySelector('.home-nav__burguer')
const HOMENAV = document.querySelector('.home-nav__list')

BURGUER.addEventListener('click',()=> HOMENAV.classList.toggle('home-nav__list--active'))