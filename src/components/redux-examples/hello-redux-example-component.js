import React from "react";
import {useSelector} from "react-redux";                                                    // import useSelector hook from Redux

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);      // extract 'Hello World' from reducer
    return(                                                                                 // render <h1> Hello World </h1>
        <h1>{message}</h1>
    )
}
export default HelloReduxExampleComponent;

