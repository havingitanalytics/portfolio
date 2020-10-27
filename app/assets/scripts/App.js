import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new MobileMenu();

/*to make reveal on scroll flexible code*/
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".quote"), 60)

new StickyHeader();

let modal

//code that loads the JS file to power Modal Button
document.querySelectorAll(".open-modal").forEach(element => {
    element.addEventListener("click", e => {
        e.preventDefault()
        if(typeof modal == "undefined") {
              import(/* webpackChunckName:"modal" */'./modules/Modal').then( x=> {
                   modal = new x.default()
                   setTimeout(() => modal.openTheModal(), 20)
                }).catch(() => console.log("There was a problem with Modal.js file"))
        } else {
           modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}