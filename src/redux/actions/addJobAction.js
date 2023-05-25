

export const addJobAction = (job) => {
    return (dispatch) => {
        dispatch(addJob(job))
    }
}

export const addJob = (job) => {
    return {
      type: "ADD_JOB",
      payload: job,
    };
  };


  export const REMOVE_JOB = "REMOVE_JOB";

  export const removeJob = (jobId) => {
    return {
      type: REMOVE_JOB,
      payload: jobId,
    };
  };

  export const SET_JOBS = "SET_JOBS";

  export const setJobs = (jobs) => {
    return {
      type: SET_JOBS,
      payload: jobs,
    };
  };
  
  export const fetchJobs = () => {
    return async (dispatch) => {
      const response = await fetch('https://localhost:7053/api/Jobs');
      const jobs = await response.json();
      dispatch(setJobs(jobs));
    };
  };

  export const SET_USER = "SET_USER";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const LOGOUT_USER = "LOGOUT_USER";

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

