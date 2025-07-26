import Layout from "../components/Layout";

const StrudelSongs = () => {
    const songs = [
        { title: "A Little Roll Never Hurt Anyone", href: "/a-little-roll" },
        { title: "Good Luck, Babe by Chappell Roan", href: "/good-luck-babe" },
        { title: "Nighttime Chug", href: "/nighttime-chug" },
        { title: "Synthetic Motor Oil", href: "/synthetic-motor-oil" },
        { title: "Vengence is Mine (Radical Highway) in the style of doom", href: "radical-highway-doom" }
    ]
    return (
        <Layout title="Chaos Control - Home">
            <h2>Strudel Stuff</h2>
            <div className="songlist">
                {
                    songs.map(song => {
                        return <a href={song.href}>{song.title}</a>
                    })
                }
            </div>
        </Layout>

    );
}
export default StrudelSongs
