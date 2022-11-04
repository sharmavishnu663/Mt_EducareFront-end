const initState = {
    centersData: [],
    introData: [],
    directorsData: [],
    commitesData: [],
    keyManagementData: [],
    awardsData: [],
    awardsDetails: [],
    error: null
};
const AboutReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "ABOUT_Data_REQUESTED":
            return {
                ...state,
            };
        case "CENTER_DATA_RESPONSE":
            return {
                ...state,
                centersData: data,
            };
        case "INTRO_DATA_RESPONSE":
            return {
                ...state,
                introData: data,
            };
        case "DIRECTOR_DATA_RESPONSE":
            return {
                ...state,
                directorsData: data,
            };
        case "COMMITTEE_DATA_RESPONSE":
            return {
                ...state,
                commitesData: data,
            };
        case "KEY_MANAGEMENT_DATA_RESPONSE":
            return {
                ...state,
                keyManagementData: data,
            };
        case "AWARDS_DATA_RESPONSE":
            return {
                ...state,
                awardsData: data,
            };
        case "AWARDS_DETAILS_DATA_RESPONSE":
            return {
                ...state,
                awardsDetails: data,
            };
        case "ABOUT_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default AboutReducer;
