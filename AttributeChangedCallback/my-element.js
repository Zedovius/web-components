class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

  }

  //Para poder usar la API de attributeChangedCallback necesitamos crear un observer para los atributos de interés.
  static get observedAttributes() {
    return ["title", "paragraph", "img"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue
  }
  
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.paragraph}</p>
                    <img src="${this.img}" />
                </div>
            </section>
            ${this.getStyles()}
        `;
    return template;
  }

  getStyles() {
    return /*html*/ `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
  }

  render() {
    //el true en cloneNode es para indicar que rendere todos los elementos
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("my-element", MyElement);
