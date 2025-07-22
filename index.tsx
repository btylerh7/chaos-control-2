import { Hono } from 'hono';
import StrudelRepl from './components/StrudelRepl';
import ALittleRoll from './components/ALittleRoll';
import { html } from 'hono/html';
import Layout from './components/Layout';
import { serveStatic } from 'hono/bun';
import type { FC } from 'hono/jsx';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './' }))
app.get('/', (c) => {
    return c.html(
        <Layout title={"Chaos Control - Home"}>
            <h1>Tyler's Website</h1>
            <p>This site is under construction. I just wanted to get my Strudel stuff shareable.</p>
            <h2>Strudel Stuff</h2>
            <div className="songlist">
                <a href="/a-little-roll">A Little Roll Never Hurt Anyone</a>
                <a href="good-luck-babe">Good Luck, Babe by Chappell Roan</a>
            </div>
        </Layout>
    )
});
app.get('/a-little-roll', c => {
    return c.html(
        html`
	    <Layout title="A Little Roll Never Hurt Anyone - Tyler">
		<h1>Yeaaaaah Strudelllll</h1>
		${ALittleRoll()}
	    </Layout>
	`
    )
})
app.get('/good-luck-babe', (c) => {
    return c.html(
        html`
	    <Layout title="Good Luck, Babe - Tyler">
		<h1>Yeaaaaah Strudelllll</h1>
		${StrudelRepl()}
	    </Layout>
	`
    )
})

export default app;
