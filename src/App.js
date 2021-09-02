import React from 'react';
import Recorder from './recorder.js';
const navStyles = {
  backgroundColor: "rgb(27 27 63 / 37%", 
  textAlign: "center",
  margin: "0px",
  border: "solid black"
};
export default function App() {
  return (
    <div>
      <h2 style= {navStyles}>The Alpha Team</h2>
      <Recorder/>
    </div>
  );
}