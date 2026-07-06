import List from "./List"

export default function Lists({ todoData, setTodoData, Checked, setChecked }) {
    return (
        <>
        {todoData.map( (data) => (
            <List
                key={data.id}
                title={data.title}
                completed={data.completed}
                todoData={todoData}
                setTodoData={setTodoData}
                id={data.id}
            />
        ))}
        </>
    )
}