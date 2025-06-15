import Add from "./components/Add";
import Calculator from "./components/Calculator";
import Divide from "./components/Divide";
import Multiply from "./components/Multiply";
import Subtract from "./components/Subtract";

function App() {
  return (
    <>
      <h1>Simple Calculator</h1>
      <Add />
      <Subtract />
      <Multiply />
      <Divide />
      <hr />
      <Calculator />
    </>
  )
}

export default App
