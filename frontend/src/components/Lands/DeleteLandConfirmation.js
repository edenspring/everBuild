import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as landActions from "../../store/land";

function DeleteLandConfirmation({currentLand}) {

  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = () => {
    dispatch(landActions.deleteCurrentLand(currentLand.id));
    return history.push("/");
  };
  useEffect(()=>{
    document.querySelector('.modal__cancel').innerText="No, I've made a terrible mistake"

  },[])

  return (
    <div>

      <div>Are you sure you want to delete the land {currentLand.name}?</div>
      <button onClick={handleDelete}>Yes</button>

    </div>
  )
}

export default DeleteLandConfirmation;
