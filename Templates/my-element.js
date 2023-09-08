


class MyElement extends HTMLElement {
  constructor() {
    super();
     
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Hola Mundo!</h2>
                <div>
                    <p>Soy más texto prro</p>
                </div>
            </section>
            ${this.getStyles}
        `     
        return template;
    }
    
    getStyles() {
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `
    }

    render() {
        //el true en cloneNode es para indicar que rendere todos los elementos
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render()
    }

}

customElements.define("my-element", MyElement);
