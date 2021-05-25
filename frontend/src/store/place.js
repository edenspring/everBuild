import { csrfFetch } from "./csrf";

const SET_PLACE = "places/setPlace";

const setCurrentPlace = (place) => {
  return {
    type: SET_PLACE,
    payload: place,
  };
};

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

export const updateplace = (place) => async (dispatch) => {
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

const initialState = {};

const placeReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SET_PLACE:
      newState = Object.assign({}, state);
      newState.place = action.payload;
      return newState;
    default:
      return state;
  }
}

export default placeReducer;
