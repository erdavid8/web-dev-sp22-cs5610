import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";       // import the component that consume the data
import hello from "./reducers/hello";                                           // import reducer that calculates/generates the data
import todos from "./reducers/todos-reducer"                                    // import new reducer
import {Provider} from "react-redux";                                           // delivers the content of the store to all its child components. invoke all methods declared in useSelector
import {combineReducers, createStore} from "redux";                             // import createStore/combineReducers function to store data from reducers
import Todos from "./todos-component";                                          // import new component to render todos
const reducers = combineReducers({hello, todos})                        // combile all reducers into a single reducer
const store = createStore(reducers);                                            // create data storage

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;
