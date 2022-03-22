import React from "react";
import {Outlet} from "react-router-dom";
/*
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
*/
import NavigationSidebar from "./NavigationSidebar";                    // import the navigation bar on left side
import WhoToFollowList from "./WhoToFollowList";                        // import WhoToFollowlist on the right side
import whoReducer from "./reducers/who-reducer";                        // import the who reducer file
import tuitsReducer from "./reducers/tuits-reducer"                     // import the tuits reducer file
import profileReducer from "./reducers/profile-reducer"                 // import the profile reducer file
import {Provider} from "react-redux";                                   // import the Provider command
import {combineReducers, createStore} from "redux";                     // load combine reducers
import hello from "../components/redux-examples/reducers/hello";
import todos from "../components/redux-examples/reducers/todos-reducer";
import TuitList from "./tuit-list/TuitList";
import PostList from "./PostList";
import PostSummaryList from "../tuiter/PostSummaryList/index";
import ProfileScreen from "./ProfileScreen/ProfileScreen";                                      // import the createStore

const reducers = combineReducers({who:whoReducer, tuits:tuitsReducer, profile:profileReducer})    // combine reducers into single reducer namespace data from each reducer
const store = createStore(reducers);                                    // create the single store from all reducer files

const Tuiter = () => {
    return(
        <Provider store={store}>
        <div className="row mt-2">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 mt-1">
                    {/* active should reference to the Outlet */}
                    <NavigationSidebar active = "home"/>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-9 col-9 mt-1 ps-1 pe-3" style={{"position":"relative"}}>
                    <Outlet/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                    <PostSummaryList/>
                </div>
            </div>
        </Provider>
    )
};

export default Tuiter;

/*

        <>
            <ExploreScreen/>
            <br/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>
        </>
*/