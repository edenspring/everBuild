import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import './CreateLandForm.css';

function CreateLandFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state));
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch()
  }
}
