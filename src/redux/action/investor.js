import axios from "axios";
import { CORPORATE_LIST, INVESTOR_LIST, RELEASE_DATA, REPORT_DATA } from "../constants";


export const CorporateDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(CORPORATE_LIST)
            .then((response) => {
                dispatch(getCorporateDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const investorDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(INVESTOR_LIST)
            .then((response) => {
                dispatch(getInvestorDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const releaseDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(RELEASE_DATA + '' + data)
            .then((response) => {
                dispatch(getReleaseDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const reportDataAPI = (data) => {
    return (dispatch, getState) => {
        dispatch(getInvestorRequest());
        axios
            .get(REPORT_DATA + '' + data)
            .then((response) => {
                dispatch(getReportDataRespond(response?.data));
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getInvestorRequest = data => {
    return {
        type: "INVESTOR_Data_REQUESTED",
    };
};

export const getInvestorDataRespond = data => {
    return {
        type: "INVESTOR_DATA_RESPONSE",
        data: data,
    };
};

export const getCorporateDataRespond = data => {
    return {
        type: "CORPORATE_DATA_RESPONSE",
        data: data,
    };
};

export const getReleaseDataRespond = data => {
    return {
        type: "RELEASE_DATA_RESPONSE",
        data: data,
    };
};

export const getReportDataRespond = data => {
    return {
        type: "REPORT_DATA_RESPONSE",
        data: data,
    };
};

export const handleError = error => {
    return {
        type: "INVESTOR_ERROR",
        error,
    };
};
