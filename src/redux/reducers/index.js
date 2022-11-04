import { combineReducers } from "redux";
import AboutReducer from "./AboutReducer";
import GalleryReducer from "./GalleryReducer";
import InvestorReducer from "./InvestorReducer";
import JobReducer from "./JobReducer";
import PolicyReducer from "./PolicyReducer";







const userReducers = {
    GalleryReducer,
    PolicyReducer,
    AboutReducer,
    InvestorReducer,
    JobReducer

}


const rootReducer = combineReducers({
    ...userReducers
});

export default rootReducer;