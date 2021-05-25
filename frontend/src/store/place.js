import { csrfFetch } from "./csrf";

const SET_PLACE = "places/setPlace";

const setCurrentLand = (place) => {
  return {
    type: SET_PLACE,
    payload: place,
  };
};

export const createPlace = (place) => async(dispatch) => {
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
};

export const getPlace = (placeId) => async(dispatch) => {
  const response = await csrfFetch(`/api/places/${placeId}`)
  const data = await response.json();
  return data;
}
