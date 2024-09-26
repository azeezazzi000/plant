import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Component/Nav'
import Home from './Pages2/Home'
import Hero from './Component/Hero/Hero';
import Footer from './Component/Footer/Footer'
import AddProduct from './Pages2/AddProduct';
import ViewProduct from './Pages2/ViewProduct';

function App() {
  return (
    <div>
     
      <BrowserRouter> 
      <Nav/>
      <Routes>

<Route path='/' element= {<Home/>}/>
<Route path='/hero' element= {<Hero/>}/>
<Route path='/addproduct' element= {<AddProduct/>}/>
<Route path='/viewproduct' element= {<ViewProduct/>}/>




</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
