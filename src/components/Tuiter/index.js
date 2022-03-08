import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";

const Tuiter = () => {
    return(

        // Lab
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link>
        </>

        // Tuiter
/*        <NavigationSidebar active="home"/>*/
    )
};

export default Tuiter;