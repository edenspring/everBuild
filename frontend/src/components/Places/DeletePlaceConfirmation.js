import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as placeActions from "../../store/place";

function DeletePlaceConfirmation({currentPlace}) {

  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = () => {
    dispatch(placeActions.deleteCurrentPlace(currentPlace.id));
    return history.push("/");
  };
  useEffect(()=>{
    document.querySelector('.modal__cancel').innerText="No, I've made a terrible mistake"

  },[])

  return (
    <div>

      <div>Are you sure you want to delete the place {currentPlace.name}?</div>
      <button onClick={handleDelete}>Yes</button>

    </div>
  )
}

export default DeletePlaceConfirmation;
