import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './componentes/Home';
import Sales from './componentes/Sales';
import './App.css';

function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Admin"/>
          <Route path="/"
            element={<Home />
            }/>
          <Route path="/Promociones"
            element={<Sales />
            }/>
          <Route path="Login"/>
          
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
