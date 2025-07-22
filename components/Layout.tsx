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
			    <<link rel="stylesheet" href="/static/main.css"/>
			    <script src="https://unpkg.com/@strudel/repl@latest"></script>
			    <script src="https://unpkg.com/@strudel/web@1.0.3"></script>
			    <title>${title}</title>
		    </head>
		    <body>
			${children}
		    </body>
		</html>
	    `}

        </Fragment>
    )

};
export default Layout;
