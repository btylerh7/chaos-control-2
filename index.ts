import { Hono } from 'hono';
import { html, raw } from 'hono/html';
import StrudelRepl from './components/StrudelRepl';
import ALittleRoll from './components/ALittleRoll';

const app = new Hono();
app.get('/', c => {
    return c.html(
        html`
	    <h1>Tyler's Website</h1>
	    <p>This site is under construction. I just wanted to get my Strudel stuff shareable.</p>
	    <h2>Strudel Stuff</h2>
	    <div style="display: grid">
		<a href="/a-little-roll">A Little Roll Never Hurt Anyone</a>
		<a href="good-luck-babe">Good Luck, Babe by Chappell Roan</a>
	    </div>
	`
    )

})
app.get('/a-little-roll', c => {
    return c.html(
        html`
	    <script src="https://unpkg.com/@strudel/repl@latest"></script>
	    <h1>Yeaaaaah Strudelllll</h1>
	    ${ALittleRoll()}

	`
    )
})
app.get('/good-luck-babe', (c) => {
    return c.html(
        html`
	    <script src="https://unpkg.com/@strudel/repl@latest"></script>
	    <h1>Yeaaaaah Strudelllll</h1>
	    ${StrudelRepl()}
	`
    )
})

export default app;
