import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Las credenciales no coinciden");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href=" ./components/Login/style.css"
        <section>
           

            <div class="container">

            <img class="photo" src="./images/picture.jpg"></img>

           
            <div class="cardi">
            <image class="logo" src="./images/logo.png"></image>
            <image class="politic" src="./images/politic.jpg"></image>
            </div>

            <app-form></app-form>
        </section>
        `;
    }
}
customElements.define("app-login", Login);
