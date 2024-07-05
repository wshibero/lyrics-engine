import { useState } from "react";


export default function App() {
    const [answer, setAnswer] = useState("");
    const [artist, setArtist] = useState("");
    const [song_title, setSongTitle] = useState("");
    const handleSubmit = function(e) {
        e.preventDefault();
        // setAnswer(song_title)
    };
    return (
        <main>
            <h1>The Lyrics Generator</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='artist name(s)'
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)} />
                <input
                    placeholder='song title'
                    type="text"
                    value={song_title}
                    onChange={(e) => { setSongTitle(e.target.value); }} />
                <input type="submit" value="submit" />
            </form>
            <p>{answer}</p>
        </main>
    );
}
