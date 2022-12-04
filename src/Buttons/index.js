import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
   tasks.length >0 && (
        <div className="div__buttons">
            <button className="div__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="div__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;