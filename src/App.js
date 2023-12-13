import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Shop from "./Home/Shop";
import Cart from "./Cart/Cart";
import { ShopContextProvider } from "./Content/Shop-Context";

function App() {
  return (
    <ShopContextProvider>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </div>
    </ShopContextProvider>
  );
}

export default App;
