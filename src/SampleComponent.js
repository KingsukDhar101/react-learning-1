import React from 'react';

export default function SampleComponent({ bgColor, a, b }) {
  let styleObj = {
    backgroundColor: bgColor,
  };
  let arr = [1, 2, 3, 4, 5];
  let arr2 = [<p>1</p>, <p>2</p>, <p>3</p>, <p>4</p>, <p>5</p>];
  return (
    <div style={styleObj}>
      <h4>Inside sample SampleComponent</h4>
      <div>a = {a}</div>
      <div>b = {b}</div>
      <div>
        {a}+{b} = {a + b}
      </div>
      <div>arr1 : {arr}</div>
      <div>arr2 : {arr2}</div>
    </div>
  );
}
