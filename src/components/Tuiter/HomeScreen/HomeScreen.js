import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";
import PostSummaryList from "../PostSummaryList";

const HomeScreen = () => {
    return(
            <div className="row mt-2">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 mt-1">
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-9 col-9 mt-1 ps-0" style={{"position":"relative"}}>
                    <PostList/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                    <PostSummaryList/>
                </div>
            </div>
    );
}

export default HomeScreen;