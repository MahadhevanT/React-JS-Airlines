//import logo from './logo.svg';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar></Navbar>
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/About' Component={About}></Route>
            <Route path='/Contact' Component={Contact}></Route>
            <Route path='/Signup' Component={Signin}></Route>
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
