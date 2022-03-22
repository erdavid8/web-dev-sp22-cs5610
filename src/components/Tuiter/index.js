import React from "react";
import {Outlet} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import NavigationSidebar from "./NavigationSidebar";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import WhoToFollowList from "./WhoToFollowList";

const Tuiter = () => {
    return(
        <div className="row mt-2">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 mt-1">
                <NavigationSidebar/>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-9 col-9 mt-1" style={{"position":"relative"}}>
                <Outlet/>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                <h2>WhoToFollowList</h2>
            </div>
        </div>
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