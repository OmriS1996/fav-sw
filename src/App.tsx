import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import Main from "./pages/main";
import Sidebar from "./components/sidebar/sidebar";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [moviesData, setMoviesData] = useState({ results: [] });

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get("https://swapi.dev/api/films");
      setMoviesData(response.data);
    }
    getMovies();
  }, []);

  return (
    <BrowserRouter>
      <Sidebar moviesData={moviesData} />
      <Routes>
        <Route path="/" element={<Blank />} />
        {moviesData.results.map((movie) => {
          let url = `/${movie.episode_id}`;
          return (
            <Route
              key={movie.episode_id}
              path={url}
              element={<Main movieDetails={movie} />}
            />
          );
        })}
        <Route path="*" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
