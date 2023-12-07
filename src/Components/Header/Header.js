import "./header.css";

import Nav from "../Nav/Nav";
import reel from '../../Assets/reel.png'


function Header() {

    return (
        <div className="Header">



            <div>Header</div>

            <Nav />

            <div className="searchEngin">

                <div><img src={reel} alt="film reel pic" className="reelPic" /></div>


                <div className="searchBar">

                    <input
                        placeholder="SEARCH INPUT"
                        type="text"
                    ></input>

                </div>

            </div>


        </div>
    );

}
export default Header;