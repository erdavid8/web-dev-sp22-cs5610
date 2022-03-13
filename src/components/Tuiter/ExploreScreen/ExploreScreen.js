import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 mt-1">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-9 col-9 mt-1" style={{"position":"relative"}}>
                <ExploreComponent/>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                <WhoToFollowList/>
            </div>
        </div>
    )
};

export default ExploreScreen;