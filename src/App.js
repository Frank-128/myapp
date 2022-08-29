import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Register from "./Register";
import Protectedroutes from "./Protectedroutes";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/addproduct"
            element={<Protectedroutes Cmp={AddProduct} />}
          />
          <Route
            path="/updateproduct/:id"
            element={<Protectedroutes Cmp={UpdateProduct} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={<Protectedroutes Cmp={ProductList} />}
          />
           <Route
            path="/search"
            element={<Protectedroutes Cmp={SearchProduct} />}
          />
         
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
