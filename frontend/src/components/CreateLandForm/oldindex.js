import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as landActions from "../../store/land";

import "./CreateLandForm.css";

function CreateLandFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, description, sessionUser.id);
    const userId = sessionUser.id;

    dispatch(landActions.createLand({ name, description, userId })).then(() =>
      dispatch(landActions.getUserLands(userId))
    );
    return history.push("/");
  };

  return (
    <div className="createland__form content">
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
    </div>
  );
}

export default CreateLandFormPage;
