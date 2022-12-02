export var AttributeSuge;
(function (AttributeSuge) {
    AttributeSuge["photosug"] = "photosug";
    AttributeSuge["usersug"] = "usersug";
    AttributeSuge["information"] = "information";
    AttributeSuge["followinfo"] = "followinfo";
})(AttributeSuge || (AttributeSuge = {}));
class MySugerencias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            photosug: null,
            usersug: null,
            information: null,
            followinfo: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="./components/Sugerencias/stylesug.css">
         
           
            <div class = "usernametext">${this.usersug}</div>

            <div class = "finfo">${this.followinfo}</div>

           <div class="profile-pic">
                 <img src= ${this.photosug} alt="usersphotos">
              </div>
           </p>
                       
           <div class = "textinfo">${this.information}</div>
           </div>


       </section>
         `;
        }
    }
}
customElements.define("my-sugerencias", MySugerencias);
export default MySugerencias;
