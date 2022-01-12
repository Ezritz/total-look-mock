import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './componentes/Home';
import Sales from './componentes/Sales';
import Admin from './componentes/Admin';

import './App.css';
import Login from './componentes/Login';

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
          
        </Routes>
      
      </BrowserRouter>


  );
}

export default App;
