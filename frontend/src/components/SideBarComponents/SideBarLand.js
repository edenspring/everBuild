import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as landActions from "../../store/land";
import "./SideBarComponents.css";
import SideBarPlace from "./SideBarPlace";
function SideBarLand() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const currentLand = useSelector((state)=>state.land.land);
  const currentPlace = useSelector((state)=>state.place);
  const [userLands, setUserLands] = useState([]);
  // console.log(sessionUser);
  useEffect(() => {
    dispatch(landActions.getUserLands(sessionUser.id)).then((data) =>
      setUserLands(data)
    );
  }, [dispatch, sessionUser.id, currentLand, currentPlace]);

  // const userLands = useSelector((state) => state.land.userLands)

  console.log(userLands);

  return (
    <div className="userlands__div">
      {userLands.map((e, i) =>
        <div key={i} className='individual__land'>
          <NavLink exact to={`/lands/${e.id}`} >
            {" "}
            {e.name}{" "}
          </NavLink>
          {e.Places && (
            <ul>
              {e.Places.map((place, idx)=> <SideBarPlace place={place} key={idx} />)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SideBarLand;
