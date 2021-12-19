import './App.css';

import { Route, Routes } from "react-router-dom";

import Home from './components/Home';
import ItemContainer from './components/ItemContainer';
// import MovieDetail from './components/MovieDetail'
import Navbar from './components/Navbar';

function App() {
  return (
      <>
      <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/:movieId" element={<ItemContainer />} />
        </Routes> 
        </>
  );
}

export default App;