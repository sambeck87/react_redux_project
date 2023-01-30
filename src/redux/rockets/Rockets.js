import axios from 'axios';

const GETDATA = 'react_redux_project/rockets/GETDATA';
const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = () => async (dispatch) => {
  const response = await axios.get(ROCKETS_URL)
    .then((allRockets) => Object.entries(allRockets.data).map(([id, rockets]) => (
      { id, ...rockets[0] })));
  dispatch({
    type: GETDATA,
    payload: response,
  });
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GETDATA: return action.payload;
    default: return state;
  }
};

export default rocketReducer;
