import {
  FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION, MISSIONS_FAILURE, MISSIONS_SUCCESS, URL,
} from '../constants/ActionTypes';

const initialState = [];

const getMission = () => ({ type: FETCH_MISSIONS });

const getSuccessMission = (payload) => ({
  type: MISSIONS_SUCCESS,
  payload,
});

const getFailedMission = (payload) => ({
  type: MISSIONS_FAILURE,
  payload,
});

const reserveMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const cancelMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const getMissionDetail = () => async (dispatch) => {
  dispatch(getMission());
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    const missions = [];
    data.forEach((element) => {
      missions.push({
        mission_id: element.mission_id,
        mission_name: element.mission_name,
        description: element.description,
        status: false,
      });
    });
    dispatch(getSuccessMission(missions));
  } catch (err) {
    dispatch(getFailedMission(err.message));
  }
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, loading: true };
    case MISSIONS_SUCCESS:
      return { ...state, loading: false, missions: action.payload };
    case MISSIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: true };
          }
          return mission;
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, status: false };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};
export const allMissions = (state) => state.missionReducer.missions;
export { getMissionDetail, reserveMission, cancelMission };

export default missionReducer;
