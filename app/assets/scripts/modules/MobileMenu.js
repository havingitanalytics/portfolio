class MobileMenu {
  constructor() {
    /*A.Select elements from the site*/ 
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.siteHeader = document.querySelector(".site-header")
    this.events()
    }
    /*B.Event handling with arrow function that indicates the method to be used*/
    events() {
      this.menuIcon.addEventListener("click", () => this.toggleTheMenu()) 
    }
    /*C.Defining functionality*/
    toggleTheMenu() {
       this.menuContent.classList.toggle("site-header__menu-content--is-visible")
       this.siteHeader.classList.toggle("site-header--is-expanded")
       this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }
  }


export default MobileMenu  /*to be included in App.js file (import code)*/