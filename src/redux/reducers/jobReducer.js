import { ADD_JOB, REMOVE_JOB, SET_JOBS, SET_USER, LOGOUT_USER } from "../actions/addJobAction";

const initialState = {
  jobs: [],
  user: null
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case REMOVE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_USER: 
      return {
        ...state,
        user: action.payload,
      };
      case LOGOUT_USER: 
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default jobReducer;
