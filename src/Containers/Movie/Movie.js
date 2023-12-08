import "./movie.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import ActorCard from "../../Components/ActorCard/ActorCard";

function Movie() {


  const params = useParams();
  //  console.log(params.movieId);

  const [thisMovie, setThisMovie] = useState([])
  const [credits, setCredits] = useState([])
  const [similar, setSimilar] = useState([])


  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setThisMovie(responseApi);
    };

    fetchMovie();
  }, []);


  console.log("reponse thisMovie attendue ", thisMovie)


  useEffect(() => {
    const fetchCredits = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setCredits(responseApi);
    };

    fetchCredits();
  }, []);

  /*
    console.log("les credits sont ", credits)
    console.log("cast = ", credits.cast)
    */
  const cast = credits.cast



  useEffect(() => {
    const fetchSimilar = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.movieId}/similar?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setSimilar(responseApi);
    };

    fetchSimilar();
  }, []);


  console.log("les similar sont ", similar)
  //console.log("similar = ", credits.cast)
  const similarArr = similar.results;













  return (

    <div className="Movie">



      <div>{thisMovie.title}</div>




      <MovieCard movie={thisMovie} />



      <div>{thisMovie.original_title}</div>

      <div>{thisMovie.release_date}</div>

      <div>{thisMovie.runtime} min</div>

      <div>{thisMovie.overview}</div>



      <section>CASTING


        <div className="actorCardHolder">

          {credits.length === 0 ? (
            <div>rien</div>
          ) : (
            cast.map((actor) => {
              return <div>{<ActorCard actor={actor} />}</div>;
            })
          )}


        </div>




      </section>




      <section>FILMS SIMILAIRES


        <div className="cardHolder">


          {similar.length === 0 ? (
            <div>rien</div>
          ) : (
            similarArr.map((movie) => {
              return <div>{<MovieCard movie={movie} />}</div>;
            })
          )}



        </div>





      </section>










    </div>
  );

}
export default Movie;