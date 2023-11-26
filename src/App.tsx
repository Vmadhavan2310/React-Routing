import './App.css';
import Index from './Components/Index';
import Contact from './Components/Contact';
import About from './Components/About';
import Customer from './Components/Customer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoPage from './Components/NoPage';
import Collection from './Components/Collection';
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
      <Route path='/order-summary' element={<OrderSummary/>}/>
      <Route path='/collections' element={<Collection/>}/>
      <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
