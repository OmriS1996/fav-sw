import { useState, useEffect } from "react";

export default function FavButton(props) {
  const [favorites, setFavorites] = useState([]);
  let index = favorites.indexOf(props.movieDetails.episode_id);

  useEffect(() => {
    let favArray = JSON.parse(localStorage.getItem("favorite"));
    if (favArray) {
      setFavorites(favArray);
    }
  }, []);

  function handleFavorite() {
    let favArray = [...favorites, props.movieDetails.episode_id];
    localStorage.setItem("favorite", JSON.stringify(favArray));
    setFavorites(favArray);
  }

  function handleUnfavorite() {
    let favArray = favorites.filter(
      (id) => id !== props.movieDetails.episode_id
    );
    localStorage.setItem("favorite", JSON.stringify(favArray));
    setFavorites(favArray);
  }

  return favorites[index] === props.movieDetails.episode_id ? (
    <button onClick={handleUnfavorite}>Unfavorite</button>
  ) : (
    <button onClick={handleFavorite}>favorite</button>
  );
}
