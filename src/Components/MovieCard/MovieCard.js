import "./movieCard.css";

import { Link } from "react-router-dom";




function MovieCard(props) {


  const myId = props.movie.id;


  return (
    <Link to={`/movie/${myId}`}>

    <div className="Card">
    

      <img src= { " https://image.tmdb.org/t/p/w500/"  + props.movie.poster_path} className="cardImg" alt={props.movie.original_title} />
      
    </div>

  </Link>
  );

}
export default MovieCard;