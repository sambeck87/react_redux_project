import { FETCH_MISSIONS, MISSIONS_FAILURE, MISSIONS_SUCCESS } from '../constants/ActionTypes';

const initialState = [];
const fetchMissions = () => ({ type: FETCH_MISSIONS });
const fetchMissionsSuccess = (payload) => ({
  type: MISSIONS_SUCCESS,
  payload,
});

const fetchMissionsFailure = (payload) => ({
  type: MISSIONS_FAILURE,
  payload,
});

const getAllMissions = () => async (dispatch) => {
  dispatch(fetchMissions());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const missions = [];
    data.forEach((mission) => {
      missions.push({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        status: false,
      });
    });
    dispatch(fetchMissionsSuccess(missions));
  } catch (error) {
    dispatch(fetchMissionsFailure(error.message));
  }
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, loading: true };
    case MISSIONS_SUCCESS:
      return { ...state, loading: false, missions: action.payload };
    case MISSIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allMissions = (state) => state.missionsReducer.missions;
export { getAllMissions };
export default missionsReducer;
