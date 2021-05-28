import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as landActions from "../../store/land";
import ContentCard from "./ContentCard"
// import DeleteLandModal from "./DeleteLandModal";
// import "./Lands.css";

function Index() {
  const sessionUser = useSelector((state) => state.session.user);
  const userLands = useSelector((state) => state.land.userLands);
  const userPlaces = useSelector((state) => state.place.userPlaces)


  const dispatch = useDispatch();
  const history = useHistory();

  // console.log('>>>>',userLands)

  return (
    <div className='index__div'>

      <h2>ahoy</h2>
      {userLands &&
      (userLands.map((content,i)=> <ContentCard content={content}/>))}
    </div>
  );
}

export default Index;
