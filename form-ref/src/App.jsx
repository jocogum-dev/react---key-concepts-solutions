import { useRef } from "react"

function App() {
  const inputRef = useRef();
  const dropdownRef = useRef(); 

  function handleSubmit(e) {
    e.preventDefault();

    console.log("inputRef: ", inputRef.current.value);
    console.log("dropdownRef: ", dropdownRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input ref={inputRef} type="text" placeholder="Test" />
      </div>
      <div className="form-control">
        <label htmlFor="fruit">Fruit</label>
      <select ref={dropdownRef} id="fruit" name="fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
        <option value="orange">Orange</option>
      </select>
      </div>
      <div className="form-control">
        <button>Submit</button>
      </div>

    </form>
  )
}

export default App
