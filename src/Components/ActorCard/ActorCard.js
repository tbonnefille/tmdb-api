import "./actorCard.css";

import { Link } from "react-router-dom";



function ActorCard(props) {


    const myId = props.actor.id;


    return (


        <Link to={`/actor/${myId}`}>


            <div className="ActorCard">

                <img src={" https://image.tmdb.org/t/p/w500/" + props.actor.profile_path} className="actorCardImg" alt="{props.actor.name}" />

                <div>{props.actor.name}</div>
                <div>{props.actor.character}</div>


            </div>


        </Link>

    );

}
export default ActorCard;