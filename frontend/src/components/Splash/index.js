import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as landActions from "../../store/land";
// import DeleteLandModal from "./DeleteLandModal";
import './Splash.css'

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
                    Everbuild
                </div>
                <div className="splash__top_hamburger">
                    HANBURDERS
                </div>
            </div>
            <div splash__content>

                <div className="splash__info_div">
                    ABOUT
                    SIGNUP
                    LOGIN
                    MORE ABOUT
                </div>
                <div className="splash__more_div">
                    MORE INFO
                </div>
                <div className="splash_testimonials_div">
                    TESTIMONIALS
                </div>
                splishsplash
            </div>
        </div>
    );
}


export default Splash