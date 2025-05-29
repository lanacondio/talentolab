import Header from './components/Header';  
import Main from './pages/Main';  
import Gallery from './components/Gallery';  
import Footer from './components/Footer';  
import Details from './pages/Details';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Listing from './pages/Listing';
import { useContext } from 'react';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import { CartContext } from './context/CartContext';
import Publish from './pages/Publish';

function App() {  

  const {isAuthenticated} = useContext(CartContext);
  
    return (  
           <Router>
           
              <Header />              
              <Gallery />             
              <Routes>
                <Route path="/" element={<Main /> }></Route>
                <Route path="/products" element={<Listing />}></Route>
                <Route path="/product/:id" element={<Details />}></Route>
                <Route path="/login" element={!isAuthenticated? <Login /> : <Navigate to="/admin"/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={isAuthenticated? <Cart /> : <Navigate to="/login" replace/>}></Route>
                <Route path="/admin" element={ isAuthenticated ? <Admin /> : <Navigate to="/login" replace/>}></Route>
                <Route path="/publish" element={ isAuthenticated ? <Publish /> : <Navigate to="/login" replace/>}></Route>
              </Routes>
              <Footer />  
                                 
            </Router>
    );  
}  
export default App;  