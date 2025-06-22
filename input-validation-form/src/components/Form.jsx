import React, { useState } from 'react'

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();

        // check validity
        if(!email.includes("@")) {
            setErrorEmail(true);
        }
        else {
            setErrorEmail(false);
        }
        if(!password.includes("!")) {
            setErrorPassword(true);
        }
        else {
            setErrorPassword(false);
        }
    }

  return (
    <>
    <form action="/">
        <label className={errorEmail ? "invalid" : ""} htmlFor="email">Your email</label>
        <input className={errorEmail ? "invalid" : ""}  value={email}  onChange={handleEmail} type="text"/>
        <label className={errorPassword ? "invalid" : ""} htmlFor="password">Your password</label>
        <input className={errorPassword ? "invalid" : ""} value={password} onChange={handlePassword} type="text" />
        <button onClick={handleSubmit} type='submit'>Submit</button>
    </form>
    </>
  )
}
