import { useState } from "react";
import "./showCount.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <p>Current Count: {count}</p>
        <button
          className="restar"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Restar
        </button>
        <button className="sumar" onClick={() => setCount(count + 1)}>
          Sumar
        </button>
      </div>
    </>
  );
};
