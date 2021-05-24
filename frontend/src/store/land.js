import { csrfFetch } from "./csrf";

const SET_LAND = "lands/setLand";
const USER_LANDS = "lands/setUserLands";
const DELETE_LAND = "lands/deleteLand";

const setLand = (land) => {
  return {
    type: SET_LAND,
    payload: land,
  };
};

const setUserLands = (userLands) => {
  return {
    type: USER_LANDS,
    payload: userLands,
  };
};

const deleteLand = () => {
  return {
    type: DELETE_LAND,
  };
};

export const createLand = (land) => async (dispatch) => {
  const { name, description, userId } = land;
  const response = await csrfFetch("/api/lands", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      userId,
    }),
  });
  const data = await response.json();
  dispatch(setLand(data));
  getUserLands(userId);
  return data;
};

export const updateLand = (land) => async (dispatch) => {
  const { currentLand, name, description } = land;
  const response = await csrfFetch(`/api/lands/${currentLand.id}/edit`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      description,
    }),
  });
  const data = await response.json();
  dispatch(setLand(data));
};

export const getLand = (landId) => async (dispatch) => {
  const response = await csrfFetch(`/api/lands/${landId}`);
  const data = await response.json();
  dispatch(setLand(data));
  return data;
};

export const getUserLands = (userId) => async (dispatch) => {
  // const {userId} = userId
  const response = await csrfFetch(`/api/users/${userId}/lands`);
  const data = await response.json();
  console.log("get userLands log: ", data);
  dispatch(setUserLands(data));
  return data;
};

export const deleteCurrentLand = (landId) => async (dispatch) => {
  const response = await csrfFetch(`/api/lands/${landId}/delete`, {
    method: "DELETE",
  });
  dispatch(deleteLand);
};

const initialState = { land: null };

const landReducer = (state = initialState, action) => {
  console.log("state", state);
  let newState;
  switch (action.type) {
    case SET_LAND:
      newState = Object.assign({}, state);
      newState.land = action.payload;
      return newState;
    case USER_LANDS:
      newState = Object.assign({}, state);
      newState.userLands = action.payload;
      return newState;
    case DELETE_LAND:
      newState = Object.assign({}, state);
      newState.land.land = null;
      return newState;
    default:
      return state;
  }
};

export default landReducer;
