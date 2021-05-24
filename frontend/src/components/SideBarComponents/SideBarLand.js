import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as landActions from "../../store/land";
import "./SideBarComponents.css";
function SideBarLand() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const currentLand = useSelector((state)=>state.land.land)
  const [userLands, setUserLands] = useState([]);
  // console.log(sessionUser);
  useEffect(() => {
    dispatch(landActions.getUserLands(sessionUser.id)).then((data) =>
      setUserLands(data)
    );
  }, [dispatch, sessionUser.id, currentLand]);

  // const userLands = useSelector((state) => state.land.userLands)

  console.log(userLands);

  return (
    <div className="userlands__div">
      {userLands.map((e, i) =>
        <div className='individual__land'>
          <NavLink exact to={`/lands/${e.id}`} key={i}>
            {" "}
            {e.name}{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default SideBarLand;
