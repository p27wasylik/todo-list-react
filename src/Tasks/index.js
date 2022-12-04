import "./tasks.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li className={`tasks__li ${task.done && props.hideDoneTasks ? "tasks__li--hidden" : ""}`}>
                <button className="tasks__button--toggleDone">
                {task.done ? "✔" : ""}
                </button>
                <span className={`{task.done ? "taks__span" : ""}`}>
                {task.content}
                </span>
                <button className="tasks__button--delete">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;