import React, { useState } from 'react';
import formStyle from "./form.module.css";

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
    <form className={formStyle.form} action="/">
        <label className={`${formStyle.label} ${errorEmail ? formStyle.invalidLabel : ""}`} htmlFor="email">Your email</label>
        <input className={`${formStyle.input} ${errorEmail ? formStyle.invalidInput : ""}`} value={email}  onChange={handleEmail} type="text"/>
        <label className={`${formStyle.label} ${errorPassword ? formStyle.invalidLabel : ""}`} htmlFor="password">Your password</label>
        <input className={`${formStyle.input} ${errorPassword ? formStyle.invalidInput : ""}`} value={password} onChange={handlePassword} type="text" />
        <button className={formStyle.button} onClick={handleSubmit} type='submit'>Submit</button>
    </form>
    </>
  )
}
