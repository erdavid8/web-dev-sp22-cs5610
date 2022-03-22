import React, {useState} from "react";                              // useState hook can be use for local component state
import {useDispatch, useSelector} from "react-redux";               // import useSelector / useDispatch - handling of application level events

const Todos = () => {                                               // retrieve todos from reducer state and assign to local todos constant
    const todos = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: '', done: false});             // create todo local state variable
    const dispatch = useDispatch();                                  // create an action object

// update todo
    const updateTodoClickHandler = (todo) => {                      // handle checkbox click
        const action = {                                            // create new action
            type: 'update-todo',                                    // with type 'update-todo'
            todo                                                    // include todo object
        }
        dispatch(action);                                           // send to all reducers
    }

// delete todo
const deleteTodoClickHandler = (todo) => {                          // delete todo event handler accepts todo
    const action = {                                                // create new action
        type: 'delete-todo',                                        // with type 'delete-todo'
        todo                                                        // include todo to remove
    }
    dispatch(action);                                               // send action to all dispatchers
}

// todo
    const todoChangeHandler = (event) => {                           // handler keystroke changes in input field
        const doValue = event.target.value;                          // get data from input field
        const newTodo = {                                            // create new todo object instance
            do: doValue                                              // set the todo do property
        };
        setTodo(newTodo);                                            // change local state todo variable
    }

// create todo
    const createTodoChangeHandler = (event) => {                    // required action type
        const action = {
            type: 'create-todo',                                    // set the todo do property
            todo                                                    // payload
        };
        dispatch(action);                                            // send action to reducer
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">

                    <input checked={todo.done}
                        onChange={(event =>
                        updateTodoClickHandler(
                            {...todo,
                            done: event.target.checked}))}
                            type="checkbox"/>
                    {todo.do}

                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>

                    <button onClick={() =>
                        deleteTodoClickHandler(todo)}
                        className="btn btn-danger float-end">
                        Delete
                    </button>

                    <button onClick={createTodoChangeHandler}
                            className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Todos

/*
// working...
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            {todo._id} <br/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>

// page 6:
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            {todo._id} <br/>
                            {todo.do}
                        </li>
                    )
                }

// page 7:
    const todoChangeHandler = (event) => {                           // handler keystroke changes in input field
        const doValue = event.target.value;                          // get data from input field
        const newTodo = {                                            // create new todo object instance
            do: doValue                                              // set the todo do property
        };
        setTodo(newTodo);                                            // change local state todo variable
    }

                    <li className="list-group-item">
                        <input onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                    </li>

// page 9:
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                    <button onClick={createTodoChangeHandler}
                        className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>
            </ul>
        </>
*/