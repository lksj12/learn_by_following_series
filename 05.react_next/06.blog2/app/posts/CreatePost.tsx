"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"


const CreatePost = () => {

    const [title, setTitle] = useState("");
    const router = useRouter()

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                title
            })
        })
        setTitle("");
        router.refresh();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                style={{border: "1px solid #000"}}
            />
            <button type="submit"
                style={{
                    backgroundColor: "lightgray",
                    border: "1px solid #000"
                    }}
                className="ml-4"
                >
                Create Post
            </button>
        </form>
    )
}

export default CreatePost;