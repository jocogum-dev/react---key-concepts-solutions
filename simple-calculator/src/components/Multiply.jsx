import React, { useState }  from 'react'

export default function Multiply() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [product, setProduct] = useState(0);

    function handleFirstNumber(event) {
        setFirstNumber(event.target.value);
    }
    function handleSecondNumber(event) {
        setSecondNumber(event.target.value);
    }
    function updateProduct(){
        setProduct(parseInt(firstNumber) * parseInt(secondNumber));
    }

    return (
        <div>
            <input type="number" value={firstNumber} onBlur={updateProduct} onChange={handleFirstNumber} />
            <span> * </span>
            <input type="number" value={secondNumber} onBlur={updateProduct} onChange={handleSecondNumber} />
            <span> = {product}</span>
        </div>
    )
}
