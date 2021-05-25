import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

function Places(){
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state)=>state.session.user);

  const [currentPlace, setCurrentPlace] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [parentLand, setParentLand] = useState(0);

  const {placeId} = useParams();

  useEffect(()=>{}, [dispatch])

  return (
    <>
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
      <DeletePlaceModal currentPlace={currentPlace} />
    </>
  )

}
