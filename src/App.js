import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { OrderSummary } from "./components/Shop/OrderSummary/OrderSummary";
import { Shop } from "./components/Shop/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop/order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
