import { Fragment, type FC } from "hono/jsx";
import { html } from "hono/html";


const Layout: FC<{ title: string, children?: any }> = ({ title, children }: { title: string; children?: any }) => {
    return (
        <Fragment>
            {
                html`
		<!DOCTYPE html>
		<html lang="en">
		    <head>
			    <meta charSet="UTF-8"/>
			    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			    <link rel="stylesheet" href="/static/main.css"/>
			    <script src="https://unpkg.com/@strudel/repl@latest"></script>
			    <script src="https://unpkg.com/@strudel/web@1.0.3"></script>
			    <title>${title}</title>
		    </head>
		    <body>
			<div class="wrapper">
			    <header class="box">
			      <p>Chaos Control</p>
			      <img src="/static/ChaosEmeraldGreen.png" alt="A green chaos emerald">
			    </header>
			    <nav class="nav box">
				<h2>Site Links</h2>
				<a class="navlink" href="/" title="Chaos Control Home">Home</a>
				<a class="navlink" href="/music-library" title="Music Library">Music Library</a>
				<a class="navlink" href="/language-learning" title="#">Language Learning</a>
				<a class="navlink" href="/" title="#">Blog</a>
				<a class="navlink" href="/" title="#">Fediverse</a>
				<a class="navlink" href="/songlist">Strudel Songs</a>
			    </nav>
			    <main id="holder" class="box">
				${children}
			    </main>
			    <footer class="box">
			      <p>Back to Top ^</p>
			    </footer>
			</div>
		    </body>
		</html>
	    `}

        </Fragment>
    )

};
export default Layout;
