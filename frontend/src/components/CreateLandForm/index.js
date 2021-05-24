import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as landActions from "../../store/land";

import "./CreateLandForm.css";

function CreateLandFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  console.log(sessionUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, sessionUser.id)
    const userId = sessionUser.id
    return dispatch(landActions.createLand({name, description, userId}))
  };

  return (
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
      <button type="submit">Create Land</button>
    </form>
  );
}

export default CreateLandFormPage;
