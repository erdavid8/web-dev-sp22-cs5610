
import TodoItem from "./TodoItem";
import todos from "./todos.json";
/* .js is optional and reformat as JSON */

const TodoList = () => {
    return(
        /* no need for $ use tag syntax instead of attribute as parameter
           no need for join()
           no need for ``
         */
        <ul>
            {
                todos.map(todo =>{
                    return(<TodoItem todo={todo} key={todo.title}/>);
                })
            }
        </ul>
    );
}
export default TodoList;





