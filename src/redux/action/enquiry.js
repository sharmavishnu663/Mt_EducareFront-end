import axios from "axios";
import { ENQUIRY_POST_DATA } from "../constants";


export const enquiryForm = (data) => {
    return (dispatch, getState) => {
        dispatch(getEnquiryPostDataRequest());
        axios
            .post(ENQUIRY_POST_DATA, data)
            .then((response) => {
                if (response) {
                    dispatch(handleSuccess({ message: response.data.message }));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getEnquiryPostDataRequest = data => {
    return {
        type: "ENQUIRY_POST_Data_REQUESTED",
    };
};

export const handleSuccess = (data) => {
    return {
        type: "SHOW_TOAST",
        data,
        toastType: "success",
    };
};
export const handleError = error => {
    return {
        type: "ENQUIRY_ERROR",
        error,
    };
};