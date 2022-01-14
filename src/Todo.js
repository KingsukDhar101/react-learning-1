import React, { useState } from 'react';

export default function Todo() {
  let [arr, setArr] = useState([]);
  let [text, setText] = useState('');

  let add = () => {
    setArr([...arr, text]);
    setText('');
  };
  console.log('render hua');
  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="enter text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={add}>add</button>
      <div>
        Todos :
        {arr.map((ele) => (
          <p>{ele}</p>
        ))}
      </div>
    </div>
  );
}
