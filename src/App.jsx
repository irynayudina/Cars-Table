import { useEffect, useState } from 'react'
import "./App.css";
import Table from './components/table/Table';
import SearchBar from './components/search/SearchBar';
import loadCars from './utils/loadCars';

function App() {
  const [count, setCount] = useState(Number(sessionStorage.getItem("count")));
  const [cars, setCars] = useState([]);


  useEffect(() => {
    loadCars().then((cars) => {
      console.log(cars)
      console.log(cars[1]);
      setCars(cars);
    });
  }, []);

  
  return (
    <>
      <h1>Cars</h1>
      <div className="card">
        <SearchBar />
      </div>
      <div className="card">
        <Table cars={cars} />
      </div>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            sessionStorage.setItem("count", count);
          }}
        >
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Test task by Iryna Yudina</p>
      <p className="read-the-docs">yudinaira4444@gmail.com</p>
    </>
  );
}

export default App
