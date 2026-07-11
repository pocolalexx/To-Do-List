import { useState } from "react";

type ToDoInputProps = {
    onAdd: (text: string) => void;
}

export default function ToDoInput({ onAdd}: ToDoInputProps) {
    const [value, setValue] = useState("");

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const trimmed = value.trim();
        if(trimmed === "") return;
        onAdd(trimmed);
        setValue("");
    }

return (
    <form onSubmit={handleSubmit} className="todo-input">
        <input
            type ="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder = "Add a new task"
        />
        <button type="submit">Add</button>
    </form>
);
}

