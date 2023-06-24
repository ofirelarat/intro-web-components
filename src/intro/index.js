export class Intro extends HTMLElement {
    constructor() {
      super();

      const template = document.createElement('template');
      if(!this.getIsAlreadyRendered()) {
        template.innerHTML = `
          <div>some check</div>
        `;
      }
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      console.log('callback')
      if(!this.getIsAlreadyRendered()) {
        window.localStorage.setItem('intro-component', new Date());
      }
    }

    getIsAlreadyRendered() {
      const introStorage = window.localStorage.getItem('intro-component');
      return introStorage != null;
    }
  }
  
  customElements.define('intro-container', Intro);
  
