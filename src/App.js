import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from './components/Home';
import MovieDetail from './components/MovieDetail'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
      <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>    
        <Routes>
            <Route exact path to='/:movieId' element={<MovieDetail />} />
        </Routes> 
        </>  
    </Router>  
  );
}

export default App;