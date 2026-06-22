import {useState} from "react"

export default function List({title, completed, todoData, setTodoData, id}) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleClick = (id) => {
        const newdata = todoData.filter((data) => data.id !== id);
        setTodoData(newdata)
        localStorage.setItem("todoData", JSON.stringify(newdata))
    };

    const handleCompletedChange = (id) => {
    const newdata = todoData.map((data) => {
        if (data.id === id) {
            return {
                ...data,
                completed: !data.completed
            };
        }
        return data;
    });

    setTodoData(newdata);
    localStorage.setItem("todoData", JSON.stringify(newdata));
};

    const handleEditChange = (event) => {
        setEditedTitle(event.target.value);
    };

    const handleEditSubmit = (event) => {
    event.preventDefault();

    const newdata = todoData.map((data) => {
        if (data.id === id) {
            return {
                ...data,
                title: editedTitle
            };
        }
        return data;
    });

    setTodoData(newdata);
    setIsEditing(false);
    localStorage.setItem("todoData", JSON.stringify(newdata));
};

    if (isEditing) {
        return (
            <div>
                <form className="list" onSubmit={handleEditSubmit}>
                    <input
                        value={editedTitle}
                        autoFocus
                        onChange={handleEditChange}
                    />
                    <button type="button" className='editting cancel' onClick={() => setIsEditing(false)}>X</button>
                    <button type="submit" className='editting save'>Save</button>
                </form>
            </div>
        )
    }
    else {
        return (
        <div className={completed ? "list completed" : "list"}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleCompletedChange(id)}
                />
                {title}
                <button className='delete' onClick={() => handleClick(id)}>X</button>
                <button className='editting edit' onClick={() => setIsEditing(true)}>Edit</button>
            </div>
    )
    }
}