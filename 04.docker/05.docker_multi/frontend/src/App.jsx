import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {

    useEffect(() => {
        axios.get(`/api/values`)
            .then(response => {
                console.log('response', response)
                setLists(response.data);
        })
    }, [])

    const changeHandler = (event) => {
        setValue(event.currentTarget.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(`/api/value`,
            {value:value})
            .then(response => {
                if (response.data.success) {
                    console.log(`response.data`, response.data);
                    setLists([...lists, response.data])
                    setValue("");
                } else {
                    alert("Failed to input value into DB!!")
                }
        })
    }

    const [lists, setLists] = useState([]);
    const [value, setValue] = useState("");

    return (
    <>
    <section id="center">
        <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
            <h1>Get started</h1>
            <p>
                Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
        </div>

        <div className="container">

            {lists && lists.map((list,index)=>(
                <li key={index}> {list.value}</li>
            ))}

            <form className="example" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="글자를 입력해주세요"
                    onChange={changeHandler}
                    value={value}
                />
                <button type="submit">확인</button>
            </form>
        </div>

        </section>

    </>
    )
}

export default App
