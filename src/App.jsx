import { useEffect, useState } from 'react'
import "./App.css";
import Table from './components/table/Table';
import SearchBar from './components/search/SearchBar';
import Loading from "./components/loading/Loading";
import Modal from './components/modals/Modal';
import AddForm from './components/modals/AddForm';
import loadCars from './utils/loadCars';

function App() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCars().then((cars) => {
      setCars(cars);
    });
  }, []);

  useEffect(() => {
    if (cars.length > 0) {
      setIsLoading(false);
    }
  }, [cars]);
  
  return (
    <>
      <h1>Cars</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="card searchbar">
            <SearchBar setCars={setCars} />
          </div>
          <div className="card">
            <Modal>
              <button className="add-btn">Add a new car +</button>
              <AddForm/>
            </Modal>
          </div>
          <div className="card">
            <Table cars={cars} />
          </div>
        </>
      )}
      <p className="read-the-docs">Test task completed by Iryna Yudina</p>
      <p className="read-the-docs">yudinaira4444@gmail.com</p>
    </>
  );
}

export default App
