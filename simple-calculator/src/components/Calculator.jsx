import React, { useState } from 'react'

export default function Calculator() {
        const [firstNumber, setFirstNumber] = useState(0);
        const [secondNumber, setSecondNumber] = useState(0);
        const [result, setResult] = useState(0);
        const [operation, setOperation] = useState('+');
    
        function handleFirstNumber(event) {
            setFirstNumber(event.target.value);
        }
        function handleSecondNumber(event) {
            setSecondNumber(event.target.value);
        }
        function updateResult(){
            switch (operation) {
                case "+":
                    setResult(parseInt(firstNumber) + parseInt(secondNumber));
                    break;
                case "-":
                    setResult(parseInt(firstNumber) - parseInt(secondNumber));
                    break;
                case "*":
                    setResult(parseInt(firstNumber) * parseInt(secondNumber));
                    break;
                case "/":
                    setResult(parseInt(firstNumber) / parseInt(secondNumber));
                    break;
                default:
                    setResult("Unknown number");
                }
        }
        function handleOperation(event) {
            setOperation(event.target.value);
        }
    return (
        <div>
            <input type="number" value={firstNumber} onChange={handleFirstNumber} />
            <span>
                <select id="operation" name="operation" value={operation} onChange={handleOperation} onBlur={updateResult}>
                    <option value="+"> + </option>
                    <option value="-"> - </option>
                    <option value="*"> * </option>
                    <option value="/"> / </option>
                </select>
            </span>

            <input type="number" value={secondNumber} onChange={handleSecondNumber} />
            <span> = {result}</span>
        </div>
    )
}
