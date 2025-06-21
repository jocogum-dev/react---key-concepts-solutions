import { useState } from "react";
import MyList from "./components/MyList"

const INITIAL_PRODUCTS = [
    { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
    { id: 'p2', title: 'Stylish Chair', price: 329.49 },
    { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
    { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
  ];

function App() {
  const [list, setList] = useState(INITIAL_PRODUCTS);

  function handleAddList() {
    setList(currList => [...currList, {id: 'p5', title: "Another new product", price: 15.99}]);
  };

  return (
    <>
      <button onClick={handleAddList}>Add Product</button>
      <ul>
        {list.map((item) => {
            return <li key={item.id}>{item.title} - {item.price}</li>
        })}
      </ul>
      
    </>
  )
}

export default App
