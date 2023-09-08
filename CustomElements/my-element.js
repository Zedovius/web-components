const plantilla = document.createElement('div');
plantilla.innerHTML = `
    <style>
        .text {
            color: red;
            font-size: 2rem;
        }

        p {
            color: blue;
        }
    </style>
    <p class="text">Hola mundo 2</p>
    <p>Texto ejemplo</p>
`


class MyElement extends HTMLElement {
  constructor() {
    super();
    //Aquí debemos crear nodos y agregarlos con JS Vanilla
        console.log('hi hi');
        this.p = document.createElement('p');
    }
    //Una vez ya creado el nodo pasamos a montarlo en el DOM
    connectedCallback() {
        this.p.textContent = "Hola Mundo!";
        this.appendChild(this.p);
        this.appendChild(plantilla);
    }

}
//Para convertir la clase en una etiqueta HTML que podemos usar en .html

customElements.define("my-element", MyElement);
