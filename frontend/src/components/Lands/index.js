import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as landActions from "../../store/land";
import DeleteLandModal from "./DeleteLandModal";
import "./Lands.css";

function Lands() {
  const sessionUser = useSelector((state) => state.session.user);
  const currentLand = useSelector((state) => state.land.land);

  const { landId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  let children;
  useEffect(() => {
    dispatch(landActions.getLand(landId));
  }, [dispatch, landId]);

  const places = currentLand ? currentLand.Places : [];

  if (places.length && currentLand !== null) {
    children = (
      <>
        <div className="content__children__text">
          Places connected to {currentLand.name}
        </div>
        <div className="content__children">
          {places?.map((e, i) => (
            <NavLink key={i} to={`/places/${e.id}`}>
              {e.name}
            </NavLink>
          ))}
        </div>
      </>
    );
  } else {
    children = (
      <>
        <div className="content__children">
          <NavLink to={`/places/new`}>
            No connected places yet, create one here!
          </NavLink>
        </div>
      </>
    );
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const description = document.querySelector(
      ".content__description__body"
    ).innerText;
    const name = document.querySelector(".content__name__body").innerText;

    const userId = sessionUser.id;

    dispatch(landActions.updateLand({ name, description, currentLand })).then(
      () => dispatch(landActions.getUserLands(userId))
    );
    return history.push("/");
  };

  const handleDelete = () => {
    dispatch(landActions.deleteCurrentLand(currentLand.id));
    return history.push("/");
  };

  return (
    <>
      <div className="content__name">Name</div>
      <div className="content__name__body" contentEditable="true">
        {currentLand ? currentLand.name : null}
      </div>
      <div className="content__description">Description</div>
      {/* <div className="content__description__body">
        <textarea value={description} disabled={disabled} />
      </div> */}
      <div className="content__description__body" contentEditable="true">
        {currentLand ? currentLand.description : null}
      </div>
      <button className="content__save" onClick={handleUpdate}>
        Save Changes
      </button>
      <DeleteLandModal currentLand={currentLand} />
      {children}
    </>
  );
}

export default Lands;
