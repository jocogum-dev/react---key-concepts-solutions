import React, { useState } from 'react'

export default function Add() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sum, setSum] = useState(0);

    function handleFirstNumber(event) {
        setFirstNumber(event.target.value);
    }
    function handleSecondNumber(event) {
        setSecondNumber(event.target.value);
    }
    function updateSum(){
        setSum(parseInt(firstNumber) + parseInt(secondNumber));
    }

    return (
        <div>
            <input type="number" value={firstNumber} onBlur={updateSum} onChange={handleFirstNumber} />
            <span> + </span>
            <input type="number" value={secondNumber} onBlur={updateSum} onChange={handleSecondNumber} />
            <span> = {sum}</span>
        </div>
    )
}
