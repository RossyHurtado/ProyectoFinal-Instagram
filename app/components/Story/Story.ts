export enum AttributeStories {

    "photostory" = "photostory",
    "namestory" = "namestory"
 }

 class MyStory extends HTMLElement{

     photostory?: string;
     namestory?: string;
 
 
     static get observedAttributes() {
       const attrs: Record<AttributeStories,null> = {
        
         photostory: null,
         namestory: null
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
     propName: AttributeStories, 
     oldValue: string | undefined,
     newValue: string | undefined,
     ){
 
        this[propName] = newValue;
        this.render();
 }

 render(){
     if(this.shadowRoot){
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

