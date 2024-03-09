import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { Button } from "../lib/components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)} /> count is {count}
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  );
}

export default App;
