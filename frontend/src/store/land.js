import {csrfFetch} from './csrf';

const SET_LAND = 'session/setLand';

const setLand = (land) => {
  return {
    type: SET_LAND,
    payload: land,
  }
}

export const createLand =  (land) => async (dispatch) => {
  const {name, description, userId} = land;
  const response = await csrfFetch("/api/lands", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      userId,
    }),
  });
  const data = await response.json();
}

export const getUserLands = (userId) => async(dispatch) => {
  // const {userId} = userId
  const response = await csrfFetch(`/api/users/${userId}/lands`);
  const data = await response.json();
  console.log('get userLands log: ', data)
  return data;
}

const initialState = {land:null}

const landReducer = (state = initialState, action) => {
  console.log('state' , state)
  let newState;
  switch(action.type){
    case SET_LAND:
      newState = Object.assign({}, state);
      newState.land = action.payload;
      return newState;
    default:
      return state;
  }
}

export default landReducer;
