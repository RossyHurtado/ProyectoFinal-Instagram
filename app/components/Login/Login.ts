import { queryUser } from "../../services/db.js";

export class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    console.log(this);

                    this.dispatchEvent(event);
                }else{
                    alert("Las credenciales no coinciden");
                }
            })
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Login/style.css"
        <section>
           

            <div class="container">

            <img class="photo" src="./images/picture.jpg" alt=""></img>

           
            <div class="cardi">
            <image class="logo" src="./images/logo.png" alt="insta logo"></image>
            <image class="politic" src="./images/politic.jpg" alt=""></image>
            </div>

            <app-form></app-form>
        </section>
        `
    }
}

customElements.define("app-login",Login);