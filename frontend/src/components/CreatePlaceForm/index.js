import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import * as placeActions from "../../store/place";
import * as landActions from "../../store/land";
// import DeletePlaceModal from "./DeletePlaceModal";

function CreatePlaceForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const userLands = useSelector((state) => state.land.userLands);

  const [parentLand, setParentLand] = useState(null);

  const { placeId } = useParams();
  const userId = sessionUser.id;

  // useEffect(() => {
  //   dispatch(placeActions.getPlace(placeId))
  //   .then(data=>setParentLand(data.landId));
  // }, [dispatch, placeId]);

  const handleCreate = (e) => {
    const description = document.querySelector(
      ".content__description__body"
    ).innerText;
    const name = document.querySelector(".content__name__body").innerText;
    const parentLand = document.querySelector(".content__parent__selector").value;
    const payload = { name, description, userId, landId: parentLand };
    console.log(payload)
    e.preventDefault();
    dispatch(placeActions.createPlace(payload));
  };

  return (
    <>
      <div className="content__name">Name:  </div>
      <div className="content__name__body" contentEditable="true">
      </div>
      <div className="content__description">Description:  </div>
      <div className="content__description__body" contentEditable="true">
      </div>
      <div className="content__parent__text">
        Select parent land:
      </div>
      <div className="content__parent">
        <select
          className="content__parent__selector"
          value={parentLand}
          onChange={(e)=>setParentLand(e.target.value)}
        >
          <option>Please choose...</option>
          {userLands
            ? userLands.map((e, i) => (
                <option key={i} value={e.id}>
                  {e.name}
                </option>
              ))
            : null}
        </select>
      </div>
      <button className="content__save" onClick={handleCreate}>
        Create Place
      </button>
      {/* <DeletePlaceModal currentPlace={currentPlace}/> */}
    </>
  );
}

export default CreatePlaceForm;
