import React, { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increment = () => setCount((prev) => prev + 1);
  const incrementRef = () => (countRef.current += 1);
  console.log(countRef.current);
  return (
    <div>
      <h1>Conter</h1>
      <h1>UseState : {count}</h1>
      <h1>UseRef : {countRef.current}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => incrementRef()}>IncrementRef</button>
    </div>
  );
};

export default Counter;
