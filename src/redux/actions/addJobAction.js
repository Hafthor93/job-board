

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

