class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <nav>
	<a href="index.html" title="Chaos Control Home">Home</a>
	<a href="music-library.html" title="Music Library">Music Library</a>
	<a href="#" title="#">Language Learning</a>
	<a href="#" title="#">Blog</a>
	<a href="#" title="#">Fediverse</a>
      </nav>
    `;
  }
}
customElements.define("custom-nav", Navbar);
