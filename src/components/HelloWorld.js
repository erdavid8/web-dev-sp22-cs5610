import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <h2>CS5610: Web Development</h2>
            <h3>student: Edgar Alan David</h3>
            <Link to="/labs">
                Labs
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default HelloWorld;