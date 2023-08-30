import React, { useState } from "react";

function App() {
  const [entry, setEntry] = useState("");
  const [data, setData] = useState([]);

  function HandleChange(event) {
    setEntry(event.target.value);
    // console.log(entry);
  }
  function HandleClick() {
    setData([...data, entry]);
    setEntry("");
    // console.log(data);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" onChange={HandleChange} value={entry} />

        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
