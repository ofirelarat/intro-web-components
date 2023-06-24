export class Intro extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
        <div>some check</div>
      `;
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
        console.log('callback')
    }
  }
  
  customElements.define('intro-container', Intro);
  
