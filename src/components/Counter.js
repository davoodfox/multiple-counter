/* eslint-disable eqeqeq */
import React, { useState } from 'react';

function Counter({step, counters, setCounters}) {
  var [count, setCount] = useState(0);
  function handleCount() {
    setCount((count) => step + count)
  }
  function handleReset() {
    setCount(0);
  }
  function handleDelete() {
    var index = counters.findIndex((item) => item == step );
    var newCounters = [...counters];
    newCounters.splice(index, 1);
    setCounters(newCounters);
  }
  return (
    <div className="counter">
      <h3>Step: {step}</h3>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Run</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Counter;