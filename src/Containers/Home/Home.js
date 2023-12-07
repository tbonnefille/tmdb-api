import "./home.css";

import Card from "../../Components/Card/Card";

function Home() {

    return (

        <div className="Home">

            <section>EN SALLE

                <div className="cardHolder">

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </div>


            </section>




            <section>FILMS POPULAIRES

                <div className="cardHolder">

                    <Card />
                    <Card />

                </div>


            </section>

        </div>
    );

}
export default Home;