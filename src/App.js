import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './components/Recipes';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/recipes' element={ <Recipes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
