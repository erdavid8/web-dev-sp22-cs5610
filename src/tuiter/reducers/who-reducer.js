import whoJson from "../data/who.json"                      // import data from JSON file

const initialstate = {
    whoReducer:whoJson
}

const whoReducer = (state = initialstate) => {
    return(state);
};

export default whoReducer;