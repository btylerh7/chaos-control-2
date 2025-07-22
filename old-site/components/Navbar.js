class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <nav>
	<a class="navlink" href="/" title="Chaos Control Home">Home</a>
	<a class="navlink" href="/music-library" title="Music Library">Music Library</a>
	<a class="navlink" href="/language-learning" title="#">Language Learning</a>
	<a class="navlink" href="/" title="#">Blog</a>
	<a class="navlink" href="/" title="#">Fediverse</a>
      </nav>
    `;
  }
}
customElements.define("custom-nav", Navbar);
