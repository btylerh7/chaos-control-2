class MusicAlbum extends HTMLElement {
  constructor() {
    super();
    const albumTitle = this.getAttribute("album");
    const albumArtist = this.getAttribute("artist");
    const releaseDate = this.getAttribute("release");
    const image = this.getAttribute("image");
    this.innerHTML = `
      <article class="album" title="${albumTitle}">
	<img src="albums/${image}">
	<div>
	  <h2>${albumTitle}</h2>
	  <p>${albumArtist} - ${releaseDate}</p>
	</div>
      </article>
      <style>
      .album {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0;
	width: fit-content;
	padding: 1rem;
	border-radius: 5px;
	border: 1px solid var(--text);
	& div > * {
	  margin: 0;
	}
	& img {
	  max-width: 250px;
	}

      }
      </style>

    `;
  }
}
customElements.define("music-album", MusicAlbum);
