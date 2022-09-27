import Navbar from "./NavBar/Navbar";
import "./App.css";
import { Footer } from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Store from "./store";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./cart";
import Order from "./order";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
