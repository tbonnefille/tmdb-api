import "./actor.css";


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import ActorCard from "../../Components/ActorCard/ActorCard";



function Actor() {


  const params = useParams();
  //console.log(params.actorId);


  const [actor, setActor] = useState([])
  const [filmo, setFilmo] = useState([])


  useEffect(() => {
    const fetchActor = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${params.actorId}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setActor(responseApi);
    };

    fetchActor();
  }, []);

  console.log("cet acteur est ", actor)



  useEffect(() => {
    const fetchFilmo = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${params.actorId}/movie_credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
        );
        const responseApi = await response.json();
        setFilmo(responseApi);
    };

    fetchFilmo();
}, []);


console.log("filmo = ",filmo)


  return (

    <div className="Actor">

      <div className="bio">

       

        <ActorCard actor={actor} />



        <div>date de naissance : {actor.birthday}</div>

        <div>Site : {actor.homepage}</div>

      </div>


      <section>FILMOGRAPHIE

<div className="cardHolder">

      {filmo.length === 0 ? (
            <div>rien</div>
          ) : (
            filmo.cast.map((movie) => {
              return <div>{<MovieCard movie={movie} />}</div>;
            })
          )}




</div>




      </section>


    </div>




  );

}
export default Actor;