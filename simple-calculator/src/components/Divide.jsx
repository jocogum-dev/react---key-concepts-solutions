import React, { useState }  from 'react'

export default function Divide() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [quotient, setQuotient] = useState(0);

    function handleFirstNumber(event) {
        setFirstNumber(event.target.value);
    }
    function handleSecondNumber(event) {
        setSecondNumber(event.target.value);
    }
    function updateQuotient(){
        setQuotient(parseInt(firstNumber) / parseInt(secondNumber));
    }
    return (
        <div>
            <input type="number" value={firstNumber} onBlur={updateQuotient} onChange={handleFirstNumber} />
            <span> / </span>
            <input type="number" value={secondNumber} onBlur={updateQuotient} onChange={handleSecondNumber} />
            <span> = {quotient}</span>
        </div>
    )
}
