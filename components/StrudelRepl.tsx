import { html } from 'hono/html';

const StrudelRepl = () => html`
    <h2>Good Luck, Babe</h2>
    <p>By: Chappell Roan</p>
    <p>Press <code>Ctrl + Enter</code> to start and <code>Ctrl + .</code> to stop.</p>
    <style>
	code {
	    font-weight: bold;
	}
    </style>
    <strudel-editor>
<!--
setcpm(115/4)
const drums = stack(
    sound("bd [cp,sd:2 bd] bd <sd:2,cp [sd:2,cp sd:2,cp]>"),
    sound("hh*8").gain(.75)
).bank("RolandTR808").room(0.05)
const pad = stack(
    note("<[d4, g4, a4] [e4,g4,a4] [d4,f#4,a4] [b3, d4, f#4, a4]>").struct("x*8").clip(.25)
).sound("z_sine, z_sawtooth").lpf(800).add(note("0, 0.15")).postgain(0.75)

const bass = note("<g2 a2 d3 b2>").struct("[x x ~ ~ ~ x x ~ ~ x]").layer(
    x => x.sound("gm_fretless_bass"),
    x => x.sound("sine").add(note("-12, -11.90"))
)

const lead = cat(
    note("f#4 ~ f#4 e4 f#4 a4 ~ e4"),
    note("e4 ~ e4 ~ e4 d4 ~ d4"),
    note("f#4 ~ f#4 ~ f#4 e4 ~ d4"),
    note("d5 ~ d5 ~ c#5 ~ c#5 ~")

)
.sound("z_sawtooth")
.adsr("0.01:0.25:0.55:0.75")
.lpf(2500)
.add(note("0, 0.075"))
.room(0.30)

$: arrange(
    // intro
    [2, drums],
    [4, stack(drums, pad, lead, bass)],
    // verse 1
    [8, stack(drums, pad, bass)],
    // prechorus 1
    [8, stack(drums, pad, bass)]
)
-->
    </strudel-editor>
`;
export default StrudelRepl;
