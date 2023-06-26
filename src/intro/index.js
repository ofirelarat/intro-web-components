export class Intro extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
          <div id='intro-container'></div>
        `;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const context = this.getAttribute('context');
    this.context_name = `intro-component-${context ?? '1'}`;

    if (!this.getIsAlreadyRendered()) {
      window.localStorage.setItem(this.context_name, new Date());
      this.shadowRoot.querySelector('#intro-container').innerHTML = `<slot></slot>`
    } else {
      this.shadowRoot.querySelector('#intro-container').innerHTML = ``
    }
  }

  getIsAlreadyRendered() {
    let introStorage = null;
    if (this.context_name) {
      introStorage = window.localStorage.getItem(this.context_name);
    }

    return introStorage != null;
  }
}

customElements.define('intro-container', Intro);

