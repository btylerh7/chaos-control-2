import { Hono } from 'hono';
import GoodLuckBabe from './components/GoodLuckBabe'
import ALittleRoll from './components/ALittleRoll';
import { html } from 'hono/html';
import Layout from './components/Layout';
import ReplLayout from './components/ReplLayout';
import { serveStatic } from 'hono/bun';
import type { FC } from 'hono/jsx';
import Homepage from './pages/Homepage';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './' }))
app.get('/', (c) => {
    return c.html(<Homepage />)
})
app.get('/songlist', (c) => {
    return c.html(
        <Layout title="Chaos Control - Home">
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
	    <ReplLayout title="A Little Roll Never Hurt Anyone - Tyler" isRepl={true} >
		<h1>Yeaaaaah Strudelllll</h1>
		${ALittleRoll()}
	    </ReplLayout>
	`
    )
})
app.get('/good-luck-babe', (c) => {
    return c.html(
        <ReplLayout title="Good Luck, Babe - Tyler" >
            <h1>Yeaaaaah Strudelllll</h1>
            <GoodLuckBabe />
        </ReplLayout>
    )
})

export default app;
