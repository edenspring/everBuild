import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as placeActions from "../../store/place";
import "./SideBarComponents.css";

function SideBarPlace({place}){
  return(
    <>
    <li>
      <NavLink to={`/places/${place.id}`}>{place.name}</NavLink>
    </li>
    </>
  )
}

export default SideBarPlace;
