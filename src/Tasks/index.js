import "./tasks.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li className={`tasks__li ${task.done && hideDone ? "tasks__li--hidden" : ""}`}>
                <button className="tasks__button--toggleDone">
                {task.done ? "✔" : ""}
                </button>
                <span className={
                    `${task.done ? "tasks__span" : ""}`
                    }>
                {task.content}
                </span>
                <button 
                className="tasks__button--delete"
                onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;