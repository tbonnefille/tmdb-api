import "./actor.css";


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import ActorCard from "../../Components/ActorCard/ActorCard";



function Actor() {


  const params = useParams();
  console.log(params.actorId);

















  return (

    <div className="Actor">

<div>Actor</div>
    </div>
  );

}
export default Actor;