import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import * as placeActions from "../../store/place";
import DeletePlaceModal from "./DeletePlaceModal";

function Places() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [currentPlace, setCurrentPlace] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentLand, setParentLand] = useState(0);

  const { placeId } = useParams();

  useEffect(() => {
    dispatch(
      placeActions.getPlace(placeId).then((data) => {
        setCurrentPlace(data);
        setName(data.name);
        setDescription(data.description);
        setParentLand(data.landId);
      })
    );
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <select onChange={(e) => setParentLand(e.target.value)}>
          <option>Please choose...</option>
          {userLands.map((e, i) => (
            <option key={i} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        <button type="submit">Create Place</button>
      </form>
      <DeletePlaceModal currentPlace={currentPlace} />
    </>
  );
}

export default Places;
