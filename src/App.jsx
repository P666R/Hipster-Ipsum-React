import { nanoid } from "nanoid";
import { useState } from "react";
import textData from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setText(textData.slice(0, parseInt(count)));
  };

  return (
    <section className="section-center">
      <h4>lorem ipsum to your rescue</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          step="1"
          min="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((text) => {
          return <p key={nanoid()}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
