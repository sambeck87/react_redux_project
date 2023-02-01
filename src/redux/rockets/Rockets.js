// import axios from 'axios';

const GETDATA = 'react_redux_project/rockets/GETDATA';
const RESERVE = 'react_redux_project/rockets/RESERVE';
const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = () => async (dispatch) => {
  const response = await fetch(ROCKETS_URL);
  const data = await response.json();
  dispatch({
    type: GETDATA,
    payload: data,
  });
};

export const reserveRocket = (id) => ({
  type: RESERVE,
  payload: id,
});

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GETDATA: return Object.keys(action.payload).map((key) => ({
      id: action.payload[key].id,
      rocketName: action.payload[key].rocket_name,
      description: action.payload[key].description,
      images: action.payload[key].flickr_images,
      reserved: false,
    }));
    case RESERVE: return state.map((rocket) => {
      if (rocket.id !== action.payload) {
        return rocket;
      }
      return { ...rocket, reserved: !rocket.reserved };
    });
    default: return state;
  }
};

export default rocketReducer;
