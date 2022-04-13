import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar(props) {
  return (
    <ul>
      {props.moviesData.results.length > 0 ? (
        props.moviesData.results.map((movie) => {
          let url = `/${movie.episode_id}`;
          return (
            <li key={movie.episode_id}>
              <Link to={url}>
                Episode: {movie.episode_id} - {movie.title}
              </Link>
            </li>
          );
        })
      ) : (
        <li>Loading...</li>
      )}
    </ul>
  );
}
