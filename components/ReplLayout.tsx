import { Fragment, type FC } from "hono/jsx";
import { html } from "hono/html";

// Same as Layout but no navbar

const ReplLayout: FC<{ title: string, children?: any }> = ({ title, children }: { title: string; children?: any }) => {
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
			<div class="container">
			    <header class="box">
			      <p>Chaos Control</p>
			      <img src="/static/ChaosEmeraldGreen.png" alt="A green chaos emerald">
			    </header>
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
export default ReplLayout;
