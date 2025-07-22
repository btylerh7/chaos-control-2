class MusicLibrary extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <music-album 
        album="Load" 
        artist="Metallica" 
        release="1996"
        image="metallica/load.jpg"
      ></music-album>
    `;
  }
}
customElements.define("music-library", MusicLibrary);
