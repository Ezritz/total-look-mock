import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './componentes/Home';
import Sales from './componentes/Sales';
import Admin from './componentes/Admin';

import './App.css';
import Login from './componentes/Login';
import Categories from './Categories';

function App() {
  return (
  
    
      <BrowserRouter>
        <Routes>
          <Route path="/Admin"
            element= {<Admin />}
          />
          <Route path="/"
            element={<Home />
            }/>
          <Route path="/Promociones"
            element={<Sales />
            }/>
          <Route path="Login" 
          element={<Login/>}/>
          <Route path="/Categories"
          element={<Categories/>}/>
        </Routes>
      
      </BrowserRouter>


  );
}

export default App;
