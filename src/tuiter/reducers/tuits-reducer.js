/* import tuits from "../data/tuits.json" */                  // import data from JSON file
import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {                                  // add a switch to handler different events
        case FIND_ALL_TUITS:
            return action.tuits
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuits._id);
        case CREATE_TUIT:
            return [
                action.newTuit, ...state];
//                  ...state, action.newTuit];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ? action.tuit : tuit
            );
        default:
            return state;
    }
};

export default tuitsReducer;
