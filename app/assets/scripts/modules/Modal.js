class Modal {
   constructor() {
       this.injectHTML()
       this.modal = document.querySelector(".modal")
       this.closeIcon = document.querySelector(".modal__close")
       this. events()
   }

  /*to be visible once we click the button*/

  events() {
    //listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())
    
    //pushes ESC key 
    document.addEventListener("keyup", e => this.keyPressHandler(e))

  }

  //ESC key == 27
  keyPressHandler(e) {
    if(e.keyCode == 27) {
       this.closeTheModal()
    } 
  }

  openTheModal() {
     this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

   /*use ` ` in JS to insert HTML code; do not use " " */
   injectHTML() {
    document.body.insertAdjacentHTML('beforeend',`
    <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon">Contactar a <strong>having it analytics</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">Para pedidos de análise de dados, teremos um formulário online em breve.</p>
        <p class="modal__description">Até lá, fale connosco no GitHub.</p>
      </div>

      <div class="social-icons">
        <a href="https://github.com/havingitanalytics" class="social-icons__icon"><img src="assets/images/icons/github.svg" alt="GitHub"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
    `) 
   }
}

export default Modal