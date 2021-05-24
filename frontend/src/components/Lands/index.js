import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as landActions from "../../store/land";
import "./Lands.css";

function Lands() {
  const sessionUser = useSelector((state) => state.session.user);
  const userLands = useSelector((state) => state.land.userLands);

  const [currentLand, setCurrentLand] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { landId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(">>>>>>>>>>", userLands);


  useEffect(() => {
    dispatch(landActions.getLand(landId)).then((data) => {
    setCurrentLand(data);
    setName(data.name);
    setDescription(data.description)
  });
  }, [dispatch, landId]);
  console.log(currentLand)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, sessionUser.id)
    const userId = sessionUser.id

    dispatch(landActions.updateLand({name, description, currentLand}))
      .then(()=>dispatch(landActions.getUserLands(userId)))
    return history.push('/');
  }

  return (
    // <div classname="land__details">
    //   <h2> Land </h2>
    //   <h3> Name </h3>
    //   <div>{currentLand.name}</div>
    //   <h3> Description</h3>
    //   <div>{currentLand.description}</div>
    <form onSubmit={handleSubmit}>
      {console.log(currentLand)}
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
      <button type="submit">Save Changes</button>
    </form>
    // </div>
  );
}

export default Lands;
