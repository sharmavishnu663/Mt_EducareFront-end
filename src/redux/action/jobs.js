import axios from "axios";
import { JOB_LIST, JOB_DATA_LIST } from "../constants";


export const jobListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getJobRequest());
        axios
            .get(JOB_LIST)
            .then((response) => {
                dispatch(getJobDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const jobDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getJobRequest());
        axios
            .get(JOB_DATA_LIST + '' + data)
            .then((response) => {
                dispatch(getJobDetailRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getJobRequest = data => {
    return {
        type: "JOB_Data_REQUESTED",
    };
};

export const getJobDataRespond = data => {
    return {
        type: "JOB_DATA_RESPONSE",
        data: data,
    };
};

export const getJobDetailRespond = data => {
    return {
        type: "JOB_DETAILS_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "JOB_ERROR",
        error,
    };
};
