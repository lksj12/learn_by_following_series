import TodoItem from "./TodoItem";

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

async function fetchTodos() {
    try {
        const res = await fetch(`http://localhost:4000/todos`);
        const todos: Todo[] = await res.json();
        return todos;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack);
        }
    }
}

export default async function TodoList() {
    const todos = await fetchTodos();

    if (!todos || todos.length === 0) {
        return <p>Todo list is not existed</p>;
    }

    const sortedTodos = [...todos].reverse();

    return (
        <>
            {sortedTodos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </>
    );
}