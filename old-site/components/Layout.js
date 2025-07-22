class SiteHead extends HTMLElement {
  constructor() {
    super();
    const title = this.getAttribute("title");
    this.innerHTML = `
      <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
	<!-- The style.css file allows you to change the look of your web pages.
	     If you include the next line in all your web pages, they will all share the same look.
	     This makes it easier to make new pages for your site. -->
	<link href="style.css" rel="stylesheet" type="text/css" media="all">
      </head>
    `;
  }
}
customElements.define("site-head", SiteHead);

class SiteLayout extends HTMLElement {
  constructor() {
    super();
  }
}
