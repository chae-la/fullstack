import './App.scss'
import Nav from './components/Nav/Nav'
import Home from './containers/Home/Homes'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ViewProducts from './containers/ViewProducts/ViewProducts';

const App = () => {
  

  return (
    <>
    <BrowserRouter>
        <Nav/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<ViewProducts/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
