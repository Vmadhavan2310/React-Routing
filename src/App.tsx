import './App.css';
import Index from './Components/Index';
import Contact from './Components/Contact';
import About from './Components/About';
import Customer from './Components/Customer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
