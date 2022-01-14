import React from 'react';

export default function SampleComponent({ bgColor, a, b }) {
  let styleObj = {
    backgroundColor: bgColor,
  };
  return (
    <>
      <div style={styleObj}>Inside sample component</div>
      <div>a = {a}</div>
      <div>b = {b}</div>
      <div>
        {a} * {b} = {a * b}
      </div>
    </>
  );
}
