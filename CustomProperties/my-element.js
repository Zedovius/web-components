class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
                <section>
                    <h1>
                        <slot name="header"></slot>
                    </h1>
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
                  :host{   
                        --primary-color: tomato;
                        --secondary-color: salmon;
                        --heading-primary: 30px;
                        --heading-secondary: 25px;

                        display: inline-block;
                        width: 100%;
                        min-width: 300px; 
                        max-width: 450px;
                      }
                      section {
                        background: var(--primary-color);
                      } 
                      section div {
                        background: var(--secondary-color);
                      }   
                      h1 {
                          font-size: var(--heading-primary);
                        }
                      h2 {
                          font-size: var(--heading-secondary);
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
