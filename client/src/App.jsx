import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import PaymentSuccess from "./pages/PaymentSuccess";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/">
          <Route path=":category" element={<ProductList />} />
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/register" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
