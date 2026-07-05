import React, { useState } from "react";
import "./Style.css";

const CodeForm = () => {
  const [code, setCode] = useState("");
  const [action, setAction] = useState("add comments to");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:2002/api/code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, action }),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setResult("Something went wrong. Check the backend.");
    }
  };

  return (
    <div className="codewhiz-container">
      <h1>CodeWhiz</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
        ></textarea>

        <select
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className="dropdown"
        >
          <option value="add comments to">Add Comments</option>
          <option value="refactor">Refactor</option>
          <option value="rename variables in">Fix Variable Names</option>
          <option value="fix bugs in">Fix Bugs</option>
          <option value="convert">Convert to Another Language</option>
        </select>

        <button type="submit" className="run-button">
          Run
        </button>
      </form>

      <div className="output-section">
        <h3>Output:</h3>
        <pre className="output-box">{result}</pre>
      </div>
    </div>
  );
};

export default CodeForm;
