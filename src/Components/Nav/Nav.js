import "./nav.css";
import { Link } from "react-router-dom";


function Nav() {

    return (
        <div className="Nav">

            <Link className="menu" to="/">Home</Link>
            <Link className="menu" to="/search">Search</Link>
            <Link className="menu" to="/movie">Movie</Link>
            <Link className="menu" to="/actor">Actor</Link>



        </div>
    );

}
export default Nav;