export class Intro extends HTMLElement {
    constructor() {
      super();

      const context = this.getAttribute('context');
      this.context_name = `intro-component-${context}`;
      const template = document.createElement('template');

      if(!this.getIsAlreadyRendered()) {
        template.innerHTML = `
          <div id='intro-container'><slot></slot></div>
        `;
      }

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      if(!this.getIsAlreadyRendered()) {
        window.localStorage.setItem(this.context_name, new Date());
      }
    }

    getIsAlreadyRendered() {
      const introStorage = window.localStorage.getItem(this.context_name);

      return introStorage != null;
    }
  }
  
  customElements.define('intro-container', Intro);
  
