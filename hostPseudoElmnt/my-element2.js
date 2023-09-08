class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
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
          `;
    return template;
  }

  getStyles() {
    return /*html*/ `
            <style>
                :host {
                         display: inline-block;
                         width: 100%;
                         min-width: 300px; 
                         max-width: 450px;
                    }
                :host(.blue) {
                    color: red;
                }
                :host[yellow] {
                    color: yellow;
                }
                :host-context(article.card) {
                    background-color: grey;
                }      
            </style>
          `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}
  
  customElements.define("my-element", MyElement);
  