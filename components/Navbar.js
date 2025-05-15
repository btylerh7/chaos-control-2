class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <nav class="nav">
	<a href="index.html" title="Chaos Control Home">Home</a>
      </nav>
    `;
  }
}
customElements.define("custom-nav", Navbar);
