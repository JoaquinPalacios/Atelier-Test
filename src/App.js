import './App.css';

import { Route, Routes } from "react-router-dom";

import Home from './components/Home';
import ItemContainer from './components/ItemContainer';
// import MovieDetail from './components/MovieDetail'
import Navbar from './components/Navbar';

function App() {
  return (
    // <Router>
      <>
      <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
        {/* </Routes>    
        <Routes> */}
            <Route exact path to='/:movieId'>
              <ItemContainer />
            </Route>
        </Routes> 
        </>  
    // </Router>  
  );
}

export default App;