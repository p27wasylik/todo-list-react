import "./style.css";

const Buttons = ({tasks, hideDones}) => (
   tasks.length >0 && (
        <div className="div__buttons">
            <button className="div__button">
                {hideDones ? "Pokaż" : "Ukryj"} ukończone
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