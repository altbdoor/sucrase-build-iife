import { useState } from "react";

export default function AboutComponent() {
  const [counter, setCounter] = useState(10);

  return (
    <>
      <h1>About page</h1>
      <p>Here's a basic React counter example:</p>
      <h3>Counter: {counter}</h3>
      <p>
        <button
          type="button"
          className="btn"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Increase counter
        </button>{" "}
        <button
          type="button"
          className="btn"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          Decrease counter
        </button>
      </p>

      <a href="#/" className="btn btn-info">
        Click to check the home page
      </a>
    </>
  );
}
