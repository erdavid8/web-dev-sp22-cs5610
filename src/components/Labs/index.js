import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "../redux-examples";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            ...
            <ReduxExamples/>
            ...
            <br/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </div>
    )
};

export default Labs;


/*
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

        <>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Classes/>
            <Styles/>
            <TodoItem/>
            <TodoList/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
*/