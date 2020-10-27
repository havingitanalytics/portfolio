import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let mobileMenu = new MobileMenu();

/*to make reveal on scroll flexible code*/
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".quote"), 60)

let stickyHeader = new StickyHeader();

if (module.hot) {
    module.hot.accept()
}