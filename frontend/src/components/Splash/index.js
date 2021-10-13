import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as landActions from "../../store/land";
// import DeleteLandModal from "./DeleteLandModal";
// import "./Lands.css";

function Splash() {
    const sessionUser = useSelector((state) => state.session.user);
    const userLands = useSelector((state) => state.land.userLands);
    const userPlaces = useSelector((state) => state.place.userPlaces)


    const dispatch = useDispatch();
    const history = useHistory();

    // console.log('>>>>',userLands)

    return (
        <div className="splash__main">
            <div className="splash__top">
                <div className="splash__top_logo">
                    LOGO GO HERRE
                </div>
                <div className="splash__top_hamburger">
                    HANBURDERS
                </div>
            </div>
            splishsplash
        </div>
    );
}


export default Splash