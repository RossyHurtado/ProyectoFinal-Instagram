/*import db from "../../services/db";

export class MyNewPost extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open"})
    }

    connectedCallback(){
        this.mount();

    }

    mount(){
        this.render();
        this.addListeners();

    }

    addListeners(){
        const form = this.shadowRoot.querySelector("form")
        form.addEventListener("submit", (evento) => {
          evento.preventDefault();

          const user = evento.target.elements[0].value
          const image = evento.target.elements[1].value
          const comment = evento.target.elements[2].value
          
          console.log({user,image,comment});
          db.addPost({user, image, comment});


        })
    }

    render() {
        if(! this.shadowRoot) return
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/Story/stylnp.css">

        <button type="submit"> Send </button>
        <form>

        <p class="input-container">
        
        <input name="Title" class="input-field" id="text" name="text" placeholder="Enter your Username" type="text">
        <label for="Title"></label>
       
        <label for="Image"><label>
        <input name="Image"  class="input-field" id="text" name="text" placeholder="Enter your URL image" type="text">
       
        <label for="Comment"></label>
        <input name="Comment"  class="input-field" id="text" name="text" placeholder="A little Description" type="text">

        </p>

        
        </form>
        
  
        `


    }
}


customElements.define('my-newpost', MyNewPost)*/
