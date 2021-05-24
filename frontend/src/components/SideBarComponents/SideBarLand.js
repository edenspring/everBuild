import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import * as landActions from '../../store/land'

function SideBarLand(){

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userLands = Array.from(dispatch(landActions.getUserLands(sessionUser.id)))
  console.log(userLands)

  return(
    <>
    {userLands.forEach((e,i) => <NavLink to={`/lands/e.id`} key={i} />)}
    </>
  )
}

export default SideBarLand;
