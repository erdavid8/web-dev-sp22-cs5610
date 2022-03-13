const TodoItem = ({
    /* provide default object so we can test component standalone*/
    todo= {
        done: true,
        title:'Buy Milk',
        status:'COMPLETED'
    }
}) => {
    /* dont need the `` */
    return(
        /* dont need $ use defaultChecked to set initial state */
        <li>
            <input type="checkbox"
                defaultedchecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>);
}
export default TodoItem;
