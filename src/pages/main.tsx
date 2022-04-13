import FavButton from "../components/favButton/favButton";
import "./main.css";

export default function Main(props) {
  const date = new Date(props.movieDetails.release_date);

  return (
    <div className="main">
      <h1>
        {props.movieDetails.title} ({date.getFullYear()})
      </h1>
      <FavButton movieDetails={props.movieDetails} />
      <dl>
        <dt>About:</dt>
        <dd>{props.movieDetails.opening_crawl}</dd>

        <dt>Director:</dt>
        <dd>{props.movieDetails.director}</dd>

        <dt>Producer</dt>
        <dd>{props.movieDetails.producer}</dd>
      </dl>
    </div>
  );
}
