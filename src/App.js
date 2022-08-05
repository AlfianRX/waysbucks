//import css
import 'bootstrap/dist/css/bootstrap.min.css'

//import components and pages
import LandingPage from './pages/LandingPage'
import Navi from './components/Navbars';
import Register from './components/Register';
import Login from './components/Login';
import Detailproduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
import AddTopping from './pages/AddTopping';
import AdminPage from './pages/AdminPage';

// Import React Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      {/* <Register/>
      <Login/> */}
      <Login/>
     <Navi/>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/detail-product" element={<Detailproduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/add-topping" element={<AddTopping />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
