import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
 useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        const data = response.data;
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
    {movies.map((movie) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <img src={movie.thumbnail} alt={movie.title} />
        {/* Add more JSX to display other movie details */}
      </div>
    ))}
  </div>
  );
}

export default App;
