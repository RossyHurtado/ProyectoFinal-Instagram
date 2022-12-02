export enum AttributeSuge {

    "photosug" = "photosug",
    "usersug" = "usersug",
    "information" = "information",
    "followinfo" = "followinfo"

 }

 class MySugerencias extends HTMLElement{

     photosug?: string;
     usersug?: string;
     information?:string;
     followinfo?: string;
 
 
     static get observedAttributes() {
       const attrs: Record<AttributeSuge,null> = {
        
         photosug: null,
         usersug: null,
         information:null,
         followinfo: null
      
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
     propName: AttributeSuge, 
     oldValue: string | undefined,
     newValue: string | undefined,
     ){
 
        
        this[propName] = newValue;
        this.render();
 }

 render(){
     if(this.shadowRoot){
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

