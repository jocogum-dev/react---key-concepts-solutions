import { useState } from "react"

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if(!email.includes("@")) {
      setError("Invalid email address entered!");
    }
    else {
      setError("");
    }
  }

  return (
    <>
    <form action="/">
        <label htmlFor="email">Your email</label>
        <input type="text" value={email} onChange={handleEmail}/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    <p>{error}</p>
    </>
  )
}
