// komponen ini mengimplementasikan shadow dom agar styling dapat diterapkan secara kapsulasi disini saja
// kalau pakai bootstrap tidak perlu pakai shadow dom

class FooterComp extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    footer {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #343a40;
      color: white;
      text-align: center;
    }
  </style>

  <footer id="footerid">
    <p>2021 - All Rights Reserved - &#169; MOVIE.COM</p>
  </footer>
    `;
  }
}

customElements.define('footer-comp', FooterComp);
