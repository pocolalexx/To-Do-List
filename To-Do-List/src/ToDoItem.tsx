import type { Todo } from "./types";

type ToDoItemProps = {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function ToDoitem({ todo, onToggle, onDelete }: ToDoItemProps){
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span>{todo.text}</span>
                <button onClick={() => onDelete(todo.id)} aria-label="Delete task">✕</button>
            </label>
        </li>
    )
}