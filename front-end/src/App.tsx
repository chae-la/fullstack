import './App.scss'
import Nav from './components/Nav/Nav'
import Home from './containers/Home/Homes'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ViewProducts from './containers/ViewProducts/ViewProducts';
import CreateProduct from './containers/CreateProduct/CreateProduct';

const App = () => {
  

  return (
    <>
    <BrowserRouter>
        <Nav/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<ViewProducts/>}/>
        <Route path="/new-product" element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
