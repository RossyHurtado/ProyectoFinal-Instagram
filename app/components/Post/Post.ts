export enum AttributePost {
    
    "photopost" = "photopost",
    "photouser" = "photouser",
    "username1" = "username1",
    "username2" = "username2",
    "location" = "location",
    "caption" = "caption",
    "days" = "days",
    "sistem" = "sistem",
    "views" = "views"
    
}

class MyPost extends HTMLElement {
    
    photopost?: string;
    photouser?: string;
    username1?: string;
    username2?: string;
    location?: string;
    caption?: string;
    days?: string;
    sistem?: string;
    views?: string;
    

    static get observedAttributes() {
      const attrs: Record<AttributePost,null> = {
        
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
     
    attributeChangedCallback(
        propName: AttributePost, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
    
            this[propName] = newValue as any;
            this.render();
    }

    render(){
        if(this.shadowRoot){
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

              <img src="./images/heart.png" alt=" heart icon" class="iconsp"> 
              <img src="./images/comment.png" alt=" comment icon" class="iconsp">
              <img src="./images/share.png" alt=" share icon" class="iconsp"> 

                <img src="./images/bookmark.png" alt=" bookmark icon" class="guardarp"> 

            
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