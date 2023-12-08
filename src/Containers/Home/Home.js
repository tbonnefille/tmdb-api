import "./home.css";

import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";

function Home() {

    const [playing, setPlaying] = useState([])
    const [popular, setPopular] = useState([])


    useEffect(() => {
        const fetchPlaying = async () => {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/now_playing?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1"
            );
            const responseApi = await response.json();
            setPlaying(responseApi);
        };

        fetchPlaying();
    }, []);

    // console.log("ceci est la repose playing", playing)
    const playArr = playing.results;
    // console.log("playArr est égal à ", playArr)


    useEffect(() => {
        const fetchPopular = async () => {
            const response = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1"
            );
            const responseApi = await response.json();
            setPopular(responseApi);
        };

        fetchPopular();
    }, []);

    // console.log("ceci est la repose popular", popular)
    const popArr = popular.results;
    //console.log("popArr est égal à ", popArr)


    return (

        <div className="Home">

            <section>EN SALLE

                <div className="cardHolder">

                    {playing.length === 0 ? (
                        <div>rien</div>
                    ) : (
                        playArr.map((movie) => {
                            return <div>{<MovieCard movie={movie} />}</div>;
                        })
                    )}

                </div>

            </section>

            <section>FILMS POPULAIRES

                <div className="cardHolder">

                    {popular.length === 0 ? (
                        <div>rien</div>
                    ) : (
                        popArr.map((movie) => {
                            return <div>{<MovieCard movie={movie} />}</div>;
                        })
                    )}

                </div>

            </section>

        </div>
    );

}
export default Home;