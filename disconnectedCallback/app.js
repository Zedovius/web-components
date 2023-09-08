class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log("Hola desde el constructor - memoria");
    }
    connectedCallback() {
        console.log("Estoy en el DOM prro ");
    }

    disconnectedCallback() {
        console.log("Me voy del DOM");
    }

}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();