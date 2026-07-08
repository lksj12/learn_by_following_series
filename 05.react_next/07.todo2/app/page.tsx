import Image from "next/image";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function ServerComponent() {

    return (
        <div>
            <Form />
            <TodoList />
        </div>
    );
}
