import axios from 'axios';

const GETDATA = 'react_redux_project/rockets/GETDATA';
const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = () => async (dispatch) => {
  const response = await axios.get(ROCKETS_URL);
  dispatch({
    type: GETDATA,
    payload: response.data,
  });
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GETDATA: return Object.keys(action.payload).map((key) => ({
      id: action.payload[key].id,
      rocketName: action.payload[key].rocket_name,
      description: action.payload[key].description,
      images: action.payload[key].flickr_images,
      reserved: false,
    }));
    default: return state;
  }
};

export default rocketReducer;
