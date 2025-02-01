import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const refElement = useRef(null);

  useEffect(() => {
    refElement.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(refElement.current);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(refElement.current)}>
        Stop Conuter
      </button>
    </div>
  );
};

export default Timer;
