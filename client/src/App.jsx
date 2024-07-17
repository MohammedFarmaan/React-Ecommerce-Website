import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import PaymentSuccess from "./pages/PaymentSuccess";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route
          exact
          path="/products/:category"
          render={({ match }) => (
            <Redirect to={`/channels/${match.params.channelId}/modes/window`} />
          )}
        />
        <Route
          exact
          path="/product/:productId"
          render={({ match }) => (
            <Redirect to={`/channels/${match.params.channelId}/modes/window`} />
          )}
        >
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <LogIn />}
          <LogIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
    /* <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="products/:category" element={<ProductList />}/>
        <Route path="products/:productId" element={<Product />} />
         <Route path="/cart" element={<Cart />}
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LogIn />} /> 
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register" element={<Navigate to="/" replace />} /> 
      {/* </Routes>
    </div>  */
  );
};

export default App;
