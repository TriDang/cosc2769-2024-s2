import { useState } from 'react';
import './App.css';

function App() {
  const URL = 'http://localhost:2222/products';

  const [products, setProducts] = useState([]);

  async function handleClick() {
    const res = await fetch(URL, { method: "GET" });
    const json = await res.json();
    setProducts(json);
  }

  const data = products.map(p => {
    return (<tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.name}</td>
      <td>{p.description}</td>
      <td>{p.price}</td>
      <td>{p.weight}</td>
    </tr>);
  });

  return (
    <>
      <h1>React Frontend</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && <tr><td colSpan="100%">No product</td></tr>}
          {products.length > 0 && data}
        </tbody>
      </table>
      <div>
        <button onClick={() => handleClick()}>
          Fetch Data
        </button>
      </div>
    </>
  )
}

export default App;
