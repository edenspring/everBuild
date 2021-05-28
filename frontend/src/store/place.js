import { csrfFetch } from "./csrf";

const SET_PLACE = "places/setPlace";
const SET_USER_PLACES = "places/setUserPlaces"

const setCurrentPlace = (place) => {
  return {
    type: SET_PLACE,
    payload: place,
  };
};

const setUserPlaces = (places) => {
  return {
    type: SET_USER_PLACES,
    payload: places,
  }
}

export const createPlace = (place) => async (dispatch) => {
  const { name, description, landId, userId } = place;
  const response = await csrfFetch("/api/places", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      landId,
      userId,
    }),
  });
  const data = await response.json();
  dispatch(setCurrentPlace(data))
};

export const deleteCurrentPlace = (placeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/places/${placeId}/delete`, {
    method: "DELETE",
  });
  dispatch(setCurrentPlace(null));
};

export const updatePlace = (place) => async (dispatch) => {
  const { currentPlace, name, description, landId } = place;
  const response = await csrfFetch(`/api/places/${currentPlace.id}/edit`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      description,
      landId,
    }),
  });
  const data = await response.json();
  dispatch(setCurrentPlace(data));
};

export const getPlace = (placeId) => async (dispatch) => {
  const response = await csrfFetch(`/api/places/${placeId}`);
  const data = await response.json();
  dispatch(setCurrentPlace(data))
  return data;
};

export const getUserPlaces = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/places`);
  const data = await response.json();
  dispatch(setUserPlaces(data));
  return data;
};

const initialState = {};

const placeReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SET_PLACE:
      newState = Object.assign({}, state);
      newState.place = action.payload;
      return newState;
    case SET_USER_PLACES:
      newState = Object.assign({}, state);
      newState.userPlaces = action.payload;
      return newState;
    default:
      return state;
  }
}

export default placeReducer;
