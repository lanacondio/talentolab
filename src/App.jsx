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
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {  

  const {isAuthenticated} = useContext(CartContext);
  
    return (  
      <HelmetProvider>
         <Helmet>
      <title> Wild urban sport </title>
      <meta name="description" content="Calzas deportivas" />
    </Helmet>

   <Router>
            
           <div className="d-flex flex-column min-vh-100">
              <Header />               
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
                <Route path="/product-edit/:id" element={ isAuthenticated ? <Publish /> : <Navigate to="/login" replace/>}></Route>
                 <Route path="/publish-listing" element={ isAuthenticated ? <Listing isCatalogo={true} /> : <Navigate to="/login" replace/>}></Route>
              </Routes>
              <Footer />  
            </div>
            </Router>

      </HelmetProvider>
        
    );  
}  
export default App;  