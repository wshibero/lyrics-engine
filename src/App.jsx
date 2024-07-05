import "./App.css";
import { useState } from "react";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [artist, setArtist] = useState("");
  const [song_title, setSongTitle] = useState("");
  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${artist}/${song_title}`);
      let data = await response.json();
      console.log(data.lyrics);
      setAnswer(data.lyrics);
    } catch (error) {
      setAnswer("error: " + error);
    }
  };
  return (
    <main>
      <h1>The Lyrics Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="artist name(s)"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <input
          placeholder="song title"
          type="text"
          value={song_title}
          onChange={(e) => {
            setSongTitle(e.target.value);
          }}
          required
        />
        <input type="submit" value="submit" />
      </form>
      <pre>{answer}</pre>
    </main>
  );
}
