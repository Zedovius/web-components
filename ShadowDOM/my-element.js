


class MyElement extends HTMLElement {
  constructor() {
    super();
        //Nueva instancia de la API Shadow DOM.Esto crea un #shadow-root en el elemento y lo regresa
        this.attachShadow({ mode: "open" }) 
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = /*html*/ `
            <section>
                <h2>Hola Mundo!</h2>
                <div>
                    <p>Soy más texto prro!</p>
                </div>
            </section>
            ${this.getStyles()}
        `     
        return template;
    }
    
    getStyles() {
        return /*html*/`
            <style>
                h2 {
                    color: red;
                }
            </style>
        `
    }

    render() {
        //el true en cloneNode es para indicar que rendere todos los elementos
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render()
    }

}

customElements.define("my-element", MyElement);
