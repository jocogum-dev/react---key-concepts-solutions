import React, { useState }  from 'react'

export default function Subtract() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [difference, setDifference] = useState(0);

    function handleFirstNumber(event) {
        setFirstNumber(event.target.value);
    }
    function handleSecondNumber(event) {
        setSecondNumber(event.target.value);
    }
    function updateDifference(){
        setDifference(parseInt(firstNumber) - parseInt(secondNumber));
    }
    return (
        <div>
            <input type="number" value={firstNumber} onBlur={updateDifference} onChange={handleFirstNumber} />
            <span> - </span>
            <input type="number" value={secondNumber} onBlur={updateDifference} onChange={handleSecondNumber} />
            <span> = {difference}</span>
        </div>
    )
}
