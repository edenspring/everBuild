import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as landActions from "../../store/land";
// import "./Lands.css";

function CreateLandFormPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const currentLand = useSelector((state) => state.land.land);

  const dispatch = useDispatch();
  const history = useHistory();

  const places = currentLand ? currentLand.Places : [];

  const handleUpdate = (e) => {
    e.preventDefault();
    const description = document.querySelector(".content__description__body").innerText;
    const name = document.querySelector(".content__name__body").innerText;

    const userId = sessionUser.id;

    dispatch(landActions.createLand({ name, description, userId })).then(
      () => dispatch(landActions.getUserLands(userId))
    );
    return history.push("/");
  };

  return (
    <>
      <div className="content__name">Name:  </div>
      <div className="content__name__body" contentEditable="true" />
      <div className="content__description">Description:  </div>
      <div className="content__description__body" contentEditable="true" />
      <button className="content__save" onClick={handleUpdate}>
        Create Land
      </button>
    </>
  );
}

export default CreateLandFormPage;
