import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    return (
        <>
            <h3 data-testid="counter">{count}</h3>
            <button
                data-testid="minus-button"
                onClick={() => setCount((count) => {return count - 1})}
                disabled={disabled}>
                    -
            </button>
            <button
                data-testid="plus-button"
                onClick={() => setCount((count) => {return count + 1})}
                disabled={disabled}>
                    +
            </button>

            <button
                data-testid="on_off-button"
                style={{backgroundColor: "blue"}}
                onClick={() => setDisabled(!disabled)}
                >
                    on/off
            </button>
        </>
    )
}