export default function Form({setTodoValue, setTodoData, todoValue, todoData}) {
    const handleChange = (event) => {
            setTodoValue(event.target.value)
        };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const last_id = todoData.length ? todoData[todoData.length - 1].id : 0

        const newTodo = {
            id: last_id+1,
            title: todoValue,
            completed: false
        };

        if (newTodo.title === "")
        {
            alert("Fill the box");
            setTodoData([...todoData])
            localStorage.setItem("todoData", JSON.stringify([...todoData]))
        }
        else{
            setTodoData([...todoData, newTodo]);
            setTodoValue("")
            localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]))
        }
    };

    return (
        <>
        <form className="createTodo" onSubmit={handleSubmit}>
            <input
                className="createTodoBox"
                type='text'
                name="value"
                placeholder='Input todo list'
                value = {todoValue}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="OK"
                className="todoSubmitBtn"
            />
            </form>
        </>
    )
}