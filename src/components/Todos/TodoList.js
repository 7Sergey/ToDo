import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2>Задач нет</h2>
      )}
    </div>
  );
}
export default TodoList;
