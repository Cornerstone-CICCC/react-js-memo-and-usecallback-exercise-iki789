import { useState } from "react";
import Profile from "./Profile";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <Profile firstName="Gus" lastName="Iishi" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ProductList />
    </>
  );
}

export default App;
