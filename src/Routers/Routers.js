import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";
import Checkout from "../Pages/Checkout";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";

const Routers = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to = 'home'/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="Shop/:id" element={<ProductDetails/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Routers;
