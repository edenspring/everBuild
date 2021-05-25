import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as landActions from "../../store/land";
import * as placeActions from "../../store/place"

const { useState, useEffect } = require("react")

function CreatePlaceForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentLand, setParentLand] = useState("");
  const [userLands, setUserLands] = useState([]);

  const sessionUser = useSelector((state) => state.session.user);
  useEffect(()=>{
    const userId = sessionUser.id;
    dispatch(landActions.getUserLands(userId))
      .then(data => setUserLands(data))
  },[dispatch, sessionUser])

  console.log(userLands)

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userId = sessionUser.id;
    console.log(name, description, parentLand, userId)
    const payload = {name, description, landId:parentLand, userId}

    dispatch(placeActions.createPlace(payload))

    return history.push('/')
  }

  return (
    <div>
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
      <select onChange={(e)=> setParentLand(e.target.value)}>
        <option>Please choose...</option>
        {userLands.map((e,i)=><option key={i} value={e.id}>{e.name}</option>)}
      </select>
      <button type="submit">Create Place</button>
    </form>
    </div>
  )
}

export default CreatePlaceForm;
