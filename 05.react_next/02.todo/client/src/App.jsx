import { useState } from 'react'
import './App.css'
import Lists from "./components/Lists"
import Form from "./components/Form"

function App() {

    const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : []
    const [todoData, setTodoData] = useState(initialTodoData);

    const [Checked, setChecked] = useState();

    const [todoValue, setTodoValue] = useState("");

    return (
        <div className='container'>
            <div className='todoBlock'>
                <div className="title">
                    <h1>TODO</h1>
                </div>
                
                <Lists 
                    todoData={todoData}
                    setTodoData={setTodoData}
                    Checked={Checked}
                    setChecked={setChecked}
                />

                <Form
                setTodoValue={setTodoValue}
                setTodoData={setTodoData}
                todoValue={todoValue}
                todoData={todoData}
            />
            </div>
        </div>
    )
}

export default App
