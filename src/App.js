import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Counter from './components/Counter';

function App() {
  var [counters, setCounters] = useState([]);
  var [step, setStep] = useState("");
  return (
    <>
      <Form step={step} setStep={setStep} counters={counters} setCounters={setCounters}/>
      <div className="counters-container">
        {counters.map(function showCounters(step) {
          return <Counter step={step} key={step} counters={counters} setCounters={setCounters}/>
        })}
      </div>
    </>
  );
}

export default App;
