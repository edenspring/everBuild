import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import * as placeActions from "../../store/place";
import * as landActions from "../../store/land";
import DeletePlaceModal from "./DeletePlaceModal";

function Places() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const currentPlace = useSelector((state) => state.place.place);
  const userLands = useSelector((state) => state.land.userLands);

  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [parentLand, setParentLand] = useState(0);


  const { placeId } = useParams();
  const userId = sessionUser.id;

  useEffect(() => {
    dispatch(placeActions.getPlace(placeId));
  }, [dispatch, placeId]);

  const handleUpdate = (e) => {
    const description = document.querySelector(
      ".content__description__body"
    ).innerText;
    const name = document.querySelector(".content__name__body").innerText;
    const parentLand = document.querySelector(".content__parent__selector").value;
    const payload = { name, description, currentPlace, landId: parentLand };
    e.preventDefault();
    console.log();
    dispatch(placeActions.updatePlace(payload));
  };

  return (
    <>
      <div className="content__name">Name</div>
      <div className="content__name__body" contentEditable="true">
        {currentPlace ? currentPlace.name : null}
      </div>
      <div className="content__description">Description</div>
      {/* <div className="content__description__body">
        <textarea value={description} disabled={disabled} />
      </div> */}
      <div className="content__description__body" contentEditable="true">
        {currentPlace ? currentPlace.description : null}
      </div>
      <div className="content__parent__text">
        Select parent land:
      </div>
      <div className="content__parent">
        <select
          className="content__parent__selector"
          value={currentPlace ? currentPlace.landId : null}
        >
          {userLands
            ? userLands.map((e, i) => (
                <option key={i} value={e.id}>
                  {e.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <button className="content__save" onClick={handleUpdate}>
        Save Changes
      </button>
      <DeletePlaceModal currentPlace={currentPlace}/>
    </>
  );
}

export default Places;
