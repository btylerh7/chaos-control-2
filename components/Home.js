class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <section class="bio">
	<p>
	  Hi! My name is Tyler. If you can't tell, I love Shadow the Hedgehog. But also,
	  I love music, programming, linux, homelab, langauge learning, manga, and so
	  much more.
	</p>
	<p>P.S. I created the chaos emerald logo in Inkscape! I'm very proud of it!</p>
        <p><span class="bold">This site is mobile friendly! Check it out on mobile too!</span></p>
      </section>

    `;
  }
}

customElements.define("home-component", HomeComponent);
