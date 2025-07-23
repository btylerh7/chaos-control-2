import { html } from 'hono/html';
import type { FC } from 'hono/jsx';

const StrudelRepl: FC<{ children?: any }> = ({ children }: { children?: any }) => {
    return (
        <>
            {html`

	    <p>Click into the editor and press <code>Ctrl + Enter</code> to start and <code>Ctrl + .</code> to stop. Alternatively, use the buttons below.</p>
	    <div class="audio-controls">
		<button id="play">Play</button>
		<button id="stop">Stop</button>
		<button onclick="window.location.href='/songlist'">Back to Song List</button>
	    </div>
	    <script>
	    const repl = () => document.getElementById('repl')
	    initStrudel({
		prebake: () => samples('github:tidalcycles/dirt-samples'),
	    });
	    document.getElementById('play').addEventListener('click', (e) => {
		e.preventDefault();
		repl().editor.repl.evaluate(repl().code)
	    })
	    document.getElementById('stop').addEventListener('click', (e) => {
		e.preventDefault();
		repl().editor.repl.stop();

	    })
	    </script>
	    `}
            <strudel-editor id="repl">
                {children}
            </strudel-editor>
        </>
    )
}

export default StrudelRepl;
