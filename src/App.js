import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoryName"
            element={<ItemListContainer />}
          />
          <Route
            path="/detalles/:productId"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
