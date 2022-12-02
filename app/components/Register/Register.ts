import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

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

            addUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("register-success",{
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
        <link rel="stylesheet" href=" ./components/Register/style.css"
        <section>
 
        
            <div class="card">
            <image class="politic" src="./images/politic.jpg" alt=""></image>
            <image class="infot" src="./images/infotop.jpg" alt=""></image>
            <image class="logo" src="./images/logo.png" alt="logo icon"></image>
            
                <image class="infob" src="./images/infoinferior.png"></image>

                <div class="card2" >
                <image class="login" src="./images/login.jpg"></image>

           
            </div>
           
            </div>


            </div>

            <image class="desApp" src="./images/apps.png"></image>
        

            <app-form></app-form>
           
        </section>
        `
    }
}

customElements.define("app-register",Register);