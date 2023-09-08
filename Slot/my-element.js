


class MyElement extends HTMLElement {
  constructor() {
    super();
        this.attachShadow({ mode: "open" }) 
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = /*html*/ `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
                <div>
                    <p>
                        <slot name="paragraph"></slot>
                    </p>
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
