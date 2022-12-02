export var AttributePost;
(function (AttributePost) {
    AttributePost["photopost"] = "photopost";
    AttributePost["photouser"] = "photouser";
    AttributePost["username1"] = "username1";
    AttributePost["username2"] = "username2";
    AttributePost["location"] = "location";
    AttributePost["caption"] = "caption";
    AttributePost["days"] = "days";
    AttributePost["sistem"] = "sistem";
    AttributePost["views"] = "views";
})(AttributePost || (AttributePost = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            photopost: null,
            photouser: null,
            username1: null,
            username2: null,
            location: null,
            caption: null,
            days: null,
            sistem: null,
            views: null,
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
            <link rel="stylesheet" href="./components/Post/stylepost.css">
           
            <section>


            <div class="post"> </div>

             <img src= ${this.photopost} alt="" class="users">
        
             <img src= ${this.photouser} alt="" class="pp">

        
        
            
             <div class="info">

             <h1> ${this.views}</h1>
             <h1>${this.username1} ${this.caption}</h1>
             <h1> ${this.sistem}</h1>
             <h1> ${this.days}</h1>


             <div class="iconsp">

              <img src="./images/heart.png" alt="" class="iconsp"> 
              <img src="./images/comment.png" alt="" class="iconsp">
              <img src="./images/share.png" alt="" class="iconsp"> 

                <img src="./images/bookmark.png" alt="" class="guardarp"> 

            
                <div class="local">
                <h2> ${this.location}</h2>
    
                <div class="user1"
                <h1>${this.username1} </h1>
           
        
            </div>
              </div>
              </div>
              </div>
             
          
                </div>
            </div>
            </div>


            
            </section>
            `;
        }
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
