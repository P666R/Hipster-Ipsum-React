import { useState } from "react";
import text from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [texts, setTexts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newText = text.slice(0, count);

    setTexts(() => {
      return newText;
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="count">count</label>
        <input
          type="number"
          id="count"
          step={1}
          min={1}
          max={8}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <div>{}</div>
    </div>
  );
}

export default App;
