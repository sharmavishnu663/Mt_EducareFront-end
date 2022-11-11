const initState = {
    categoryData: [],
    error: null
};
const CategoryReducer = (state = initState, action) => {
    const data = action?.data;
    switch (action?.type) {
        case "CATEGORY_Data_REQUESTED":
            return {
                ...state,
            };
        case "CATEGORY_DATA_RESPONSE":
            return {
                ...state,
                categoryData: data,
            };
        case "CATEGORY_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};
export default CategoryReducer;
