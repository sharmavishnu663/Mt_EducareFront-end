import axios from "axios";
import { CENTERS_LIST, INTRO_LIST, DIRECTOR_LIST, KEY_MANAGEMENT_LIST, AWARDS_LIST, AWARDS_DETAIL_LIST } from "../constants";


export const centerListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(CENTERS_LIST)
            .then((response) => {
                dispatch(getCentersDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const introListAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(INTRO_LIST)
            .then((response) => {
                dispatch(getIntroDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}


export const boardDirectorAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(DIRECTOR_LIST)
            .then((response) => {
                dispatch(getDirectorDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const boardCommitteeAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(DIRECTOR_LIST)
            .then((response) => {
                dispatch(getCommitteeDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const keyManagementAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(KEY_MANAGEMENT_LIST)
            .then((response) => {
                dispatch(getKeyManagementDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const awardsAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(AWARDS_LIST)
            .then((response) => {
                dispatch(getAwardsDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const awardsDetailAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getAboutRequest());
        axios
            .get(AWARDS_DETAIL_LIST + '' + data)
            .then((response) => {
                dispatch(getAwardsDetailsDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getAboutRequest = data => {
    return {
        type: "ABOUT_Data_REQUESTED",
    };
};

export const getCentersDataRespond = data => {
    return {
        type: "CENTER_DATA_RESPONSE",
        data: data,
    };
};

export const getIntroDataRespond = data => {
    return {
        type: "INTRO_DATA_RESPONSE",
        data: data,
    };
};

export const getDirectorDataRespond = data => {
    return {
        type: "DIRECTOR_DATA_RESPONSE",
        data: data,
    };
};

export const getCommitteeDataRespond = data => {
    return {
        type: "COMMITTEE_DATA_RESPONSE",
        data: data,
    };
};

export const getKeyManagementDataRespond = data => {
    return {
        type: "KEY_MANAGEMENT_DATA_RESPONSE",
        data: data,
    };
};


export const getAwardsDataRespond = data => {
    return {
        type: "AWARDS_DATA_RESPONSE",
        data: data,
    };
};

export const getAwardsDetailsDataRespond = data => {
    return {
        type: "AWARDS_DETAILS_DATA_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "ABOUT_ERROR",
        error,
    };
};
