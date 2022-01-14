import React from 'react';
import './style.css';
// import SampleComponent from './SampleComponent';
import Todo from './Todo.js';
import Todo2 from './Todo2.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <hr />
      {/* <SampleComponent bgColor={'yellow'} a={10} b={20} /> <hr /> */}
      {/* <SampleComponent bgColor={'lightblue'} a={100} b={200} /> <hr /> */}
      <Todo2 />
    </div>
  );
}
