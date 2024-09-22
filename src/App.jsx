import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="text-4xl text-orange-500 underline">
                viteReactEmpty Project
            </h1>
        </>
    );
}

export default App;
