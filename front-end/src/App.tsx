import './App.scss'
import Nav from './components/Nav/Nav'
import ProductList from './components/ProductList/ProductList';
import Home from './containers/Home/Homes'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  

  return (
    <>
    <BrowserRouter>
        <Nav/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
