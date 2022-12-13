import "./tasks.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li className={`tasks__li ${task.done && hideDone ? "tasks__li--hidden" : ""}`}>
                <button
                    className="tasks__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={
                    `${task.done ? "tasks__span" : ""}`
                }>
                    {task.id} - {task.content}
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