import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Recipes from './components/Recipes';

function App() {
  return (
    <BrowserRouter basename='/EcoChef'>
      <Navbar/>
      <Routes>
        <Route path='/EcoChef' element={ <Home/>}/>
        <Route path='/recipes' element={ <Recipes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
