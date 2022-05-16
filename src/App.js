import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Shared/About/About';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
