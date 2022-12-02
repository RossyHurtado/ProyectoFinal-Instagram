export var AttributeStories;
(function (AttributeStories) {
    AttributeStories["photostory"] = "photostory";
    AttributeStories["namestory"] = "namestory";
})(AttributeStories || (AttributeStories = {}));
class MyStory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            photostory: null,
            namestory: null
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
         <link rel="stylesheet" href="./components/Story/stylestory.css">
          
         <section class="main"> 
            <div class="boxstory"></div>
              <img src="./images/storyb.png" alt="" class="boxstory"> 

             <div class="status-card">
                <div class="storie-pic"><img src= ${this.photostory} alt="usersphotos"></div>
                  
                  <div class = "text-container">${this.namestory}</div>
                </div>
             </div>
           </div>
        
           </div>
       
        </section>
       
         `;
        }
    }
}
customElements.define("my-story", MyStory);
export default MyStory;
