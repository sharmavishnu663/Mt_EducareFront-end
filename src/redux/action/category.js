import axios from "axios";
import { Category_LIST } from "../constants";
import { getCommonApiHeader } from "../../Utils/utils";


export const categoryListApi = (data) => {
    return (dispatch, getState) => {
        dispatch(getCategoryDataRequest());
        axios
            .get(Category_LIST, {
                headers: {
                    ...getCommonApiHeader(),
                },
            })
            .then((response) => {
                if (response) {
                    dispatch(getCategoryDataRespond(response?.data));
                }
            }).catch(err => {
                dispatch(handleError(err));
            });
    };
}

export const getCategoryDataRequest = data => {
    return {
        type: "CATEGORY_Data_REQUESTED",
    };
};

export const getCategoryDataRespond = data => {
    return {
        type: "CATEGORY_DATA_RESPONSE",
        data: data,
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
        type: "CATEGORY_ERROR",
        error,
    };
};