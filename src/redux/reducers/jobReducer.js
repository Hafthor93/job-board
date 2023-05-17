import { ADD_JOB, REMOVE_JOB } from "../actions/addJobAction";

const initialState = {
  jobs: [],
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
    default:
      return state;
  }
};

export default jobReducer;
