import "../index.js";
import dataStory from "../dataStory.js";
import dataPost from "../dataPost.js";
import dataSuge from "../dataSuge.js";
import { AttributePost } from "../Post/Post.js";
import { AttributeStories } from "../Story/Story.js";
import { AttributeSuge } from "../Sugerencias/Sugerencias.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.post = [];
        this.stories = [];
        this.suger = [];
        this.attachShadow({ mode: "open" });
        dataSuge.forEach((suger) => {
            const sugeCard = this.ownerDocument.createElement("my-sugerencias");
            sugeCard.setAttribute(AttributeSuge.photosug, suger.photosug);
            sugeCard.setAttribute(AttributeSuge.usersug, suger.usersug);
            sugeCard.setAttribute(AttributeSuge.information, suger.information);
            sugeCard.setAttribute(AttributeSuge.followinfo, suger.followinfo);
            this.suger.push(sugeCard);
        });
        dataStory.forEach((stories) => {
            const storyC = this.ownerDocument.createElement("my-story");
            storyC.setAttribute(AttributeStories.photostory, stories.photostory);
            storyC.setAttribute(AttributeStories.namestory, stories.namestory);
            this.stories.push(storyC);
        });
        dataPost.forEach((post) => {
            const postC = this.ownerDocument.createElement("my-post");
            postC.setAttribute(AttributePost.photopost, post.photopost);
            postC.setAttribute(AttributePost.photouser, post.photouser);
            postC.setAttribute(AttributePost.username1, post.username1);
            postC.setAttribute(AttributePost.username2, post.username2);
            postC.setAttribute(AttributePost.location, post.location);
            postC.setAttribute(AttributePost.caption, post.caption);
            postC.setAttribute(AttributePost.days, post.days);
            postC.setAttribute(AttributePost.sistem, post.sistem);
            postC.setAttribute(AttributePost.views, post.views);
            this.post.push(postC);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c;
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Home/stylehome.css"


        <article>
        <image class="profisuge" src="./images/profilesuge.jpg"></image>

        <image class="sugein" src="./images/infosuge.jpg"></image>
        
        <section>
    
        <nav class="navbar">
        <div class="nav-wrapper">
         <img src="./images/logo2.png" class="logo" alt="">
        
         <input type="text" class="search-box" placeholder="Buscar"> 


         <div class="nav-items">
         <img src="./images/chat.png" class="icono" alt="">
         <img src="./images/np.png" class="icono" alt="">
         <img src="./images/finder.png" class="icono" alt="">
         <img src="./images/heart2.png" class="icono" alt="">
    
         <div class="nav-user">
         <img src="./images/rossy.jpg" class="nav-user" alt="">

         <div class="casa">
         <img src="./images/house.png" class="icono" alt="">


      </div>
      
      </div>
         
         </div>
     
           </div>
         </div>
        
      </nav>
        </section>

        </article>


        `;
        const storyContainer = document.createElement("div");
        this.stories.forEach((stories) => {
            storyContainer === null || storyContainer === void 0 ? void 0 : storyContainer.appendChild(stories);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(storyContainer);
        const sugeContainer = document.createElement("div2");
        this.suger.forEach((suger) => {
            sugeContainer === null || sugeContainer === void 0 ? void 0 : sugeContainer.appendChild(suger);
        });
        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(sugeContainer);
        const postContainer = document.createElement("div3");
        this.post.forEach((post) => {
            postContainer === null || postContainer === void 0 ? void 0 : postContainer.appendChild(post);
        });
        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(postContainer);
    }
}
customElements.define("app-home", Home);
