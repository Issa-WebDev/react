import React, { useState } from "react";
import { use } from "react";

const App = () => {
  const [copied, setCopied] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (copied.trim()) {
      navigator.clipboard
        .writeText(copied)
        .then(() => {
          setIsCopied(!isCopied);
        })
        .catch(() => {
          setCopied(isCopied);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={copied}
        onChange={(e) => setCopied(e.target.value)}
      />
      <button className="btnCopy" onClick={handleCopy}>
        Copy
      </button>
      {isCopied &&  <p>text copied</p>}
    </div>
  );
};

export default App;
