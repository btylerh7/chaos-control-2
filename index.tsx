import { Hono } from 'hono';
import GoodLuckBabe from './components/StruelSongs/GoodLuckBabe';
import ALittleRoll from './components/StruelSongs/ALittleRoll';
import ReplLayout from './components/ReplLayout';
import { serveStatic } from 'hono/bun';
import Homepage from './pages/Homepage';
import NighttimeChug from './components/StruelSongs/NighttimeChug';
import StrudelSongs from './pages/StrudelSongs';
import SyntheticMotorOil from './components/StruelSongs/SyntheticMotorOil';

const app = new Hono();
app.use('/static/*', serveStatic({ root: './' }))
app.get('/', (c) => {
    return c.html(<Homepage />)
})
app.get('/songlist', c => c.html(<StrudelSongs />));
app.get('/a-little-roll', c => {
    return c.html(
        <ReplLayout title="A Little Roll Never Hurt Anyone - Tyler" >
            <h1>Yeaaaaah Strudelllll</h1>
            <ALittleRoll />
        </ReplLayout>
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
app.get('/nighttime-chug', (c) => {
    return c.html(
        <ReplLayout title="Nighttime Chug - Tyler">
            <NighttimeChug />
        </ReplLayout>

    )

})
app.get('/synthetic-motor-oil', c => {
    return c.html(
        <ReplLayout title="Synthetic Motor Oil - Tyler">
            <SyntheticMotorOil />
        </ReplLayout>
    )
})

export default app;
