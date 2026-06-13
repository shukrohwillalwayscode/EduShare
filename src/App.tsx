import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import {Listing} from "./pages/Listing";
import SignUp from "./pages/SignUp";
import {Products} from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/books" element={<Products />} />
          <Route path="/upload" element={<Listing />} />
          <Route path="/products/:id" element={<ProductDetails />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
