import type { Todo } from './types';
import ToDoItem from "./ToDoItem";

type ToDoListProps= {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function ToDoList({ todos, onToggle, onDelete }: ToDoListProps){
    if (todos.length === 0) {
        return <p className="empty-state">No tasks to display yet.</p>
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}