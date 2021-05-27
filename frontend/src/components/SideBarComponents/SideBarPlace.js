import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as placeActions from "../../store/place";
import "./SideBarComponents.css";

function SideBarPlace({ place }) {
  return (
    <>
      <li className='hidden'>
        <NavLink to={`/places/${place.id}`}>
          <div className='link__container__div'  >{place.name}</div>
        </NavLink>
      </li>
    </>
  );
}

export default SideBarPlace;
