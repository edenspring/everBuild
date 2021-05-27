import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as landActions from "../../store/land";
import "./SideBarComponents.css";
import SideBarPlace from "./SideBarPlace";
function SideBarLand() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const currentLand = useSelector((state) => state.land.land);
  const currentPlace = useSelector((state) => state.place);
  const [userLands, setUserLands] = useState([]);
  const [expand, setExpand] = useState(false);

  // console.log(sessionUser);
  useEffect(() => {
    dispatch(landActions.getUserLands(sessionUser.id)).then((data) =>
      setUserLands(data)
    );
  }, [dispatch, sessionUser.id, currentLand, currentPlace]);

  // const userLands = useSelector((state) => state.land.userLands)

  console.log(userLands);
  function iconHover(e) {
    const div = e.target.closest('.individual__land');
    const icon = div.querySelector('i');
    icon.classList.remove("fa-angle-right");
    icon.classList.add("fa-angle-down");
  }

  function iconDepart(e) {
    const div = e.target.closest('.individual__land');
    const icon = div.querySelector('i');
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-right");
  }

  return (
    <div className="userlands__div">
      {userLands.map((e, i) => (
        <div key={i} className="individual__land sidebar__content" onMouseOver={iconHover} onMouseOut={iconDepart}>
          <NavLink className="land__link" exact to={`/lands/${e.id}`}>
            <div className="link__container__div">
              <i id='icon'class="fas fa-angle-right" ></i>
              <span>{` `}</span>
              {("    ", e.name)}
            </div>
          </NavLink>
          {e.Places && (
            <ul>
              {e.Places.map((place, idx) => (
                <SideBarPlace place={place} key={idx} />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default SideBarLand;
