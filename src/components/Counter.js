import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(0);
    return (
        <div className="counter">
            <button onClick={() => setNum((n) => n + 1)}>update count</button>
            <span>{num}</span>
        </div>
    );
}

export default Counter;
