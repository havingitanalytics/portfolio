import throttle from 'lodash/throttle'  /*for more efficient code: scroll percent will not be calculating all web pixels, it will throttle calculation*/
import debounce from 'lodash/debounce'  /*to resize window use lodash debounce*/

class RevealOnScroll {
  constructor(elements, startRevealingPercent) {
    this.startRevealingPercent = startRevealingPercent
    this.itemsToReveal = elements
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)  /*200ms for function call*/
    this.events()
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle)
    window.addEventListener("resize", debounce(() => {
      console.log("Resize debounce just ran")
      this.browserHeight = window.innerHeight}, 333)  /*333 ms to call browser height calculation*/
      )
  }

  calcCaller() {
    /*no need to measure scroll percent in all page, only after visualizações*/
    /*more efficient code please--always => USE LODASH package*/
    console.log("Scroll function ran")
    this.itemsToReveal.forEach( element => {
        if(element.isRevealed == false) {  /*call function only if element is not visible*/
          this.calculateIfScrolledTo (element)
        }
    })
  }

  calculateIfScrolledTo(element) {
    if(window.scrollY + this.browserHeight > element.offsetTop) {
      console.log("Element was calculated")
      let scrollPercent = 
      ((element.getBoundingClientRect().y)/(this.browserHeight) * 100)
      if (scrollPercent < this.startRevealingPercent) {
         element.classList.add("reveal-item--is-visible")
         element.isRevealed = true  /*to stop calling after revealing*/
      if (element.isLastItem) {
         window.removeEventListener("scroll", this.scrollThrottle) 
        }
      }
    }
  }

  hideInitially() {
      this.itemsToReveal.forEach (element => {
          element.classList.add("reveal-item")
          element.isRevealed = false  /*to stop calling after revealing*/
        })
    /*to target the last element to stop the loop*/
      this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true
  }
}

export default RevealOnScroll;