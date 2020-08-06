/* eslint-disable eqeqeq */
import React from 'react';

function Form({step, setStep, counters, setCounters}){
    function handleInputChange(event) {
        setStep(event.target.value);
    }
    function handleButtonClick(event) {
        if (!(counters.includes(Number(step))) && step != "") {
            setCounters([...counters, Number(step)])
        }
        setStep("");
    }
    return (
        <form className="form" onClick={(e)=>e.preventDefault()}>
            <label htmlFor="step">
                Enter a step to add a new counter:&nbsp;
                <input type="number" name="step" id="step" onChange={handleInputChange} value={step}/>
            </label>
            <button onClick={handleButtonClick}>Create</button>
        </form>
    )
}

export default Form;