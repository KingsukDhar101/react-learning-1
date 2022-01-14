import React, { useState } from 'react';

export default function Todo2() {
  let [arr, setArr] = useState(['1', '2']);
  let [text, setText] = useState(['']);
  let add = () => {
    arr.push(text);
    setText('');
  };
  let styleObj = {
    backgroundColor: "lightblue",
    border: "1px solid gray",
    margin: "5px",
    padding: "5px",
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="add text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>add</button>
      <hr />
      <div>
        {arr.map((e) => (
          <p style={styleObj}>{e}</p>
        ))}
      </div>
    </div>
  );
}
