import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Todolist from './components/Todolist';
import Frontpage from './components/Frontpage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/todolist' element={<Todolist/>}/>
        <Route path='/' element={<Frontpage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
