import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/LogIn/Login";
import Orders from "./Component/Orders/Orders";
import Products from "./Component/Products/Products";
import Register from "./Component/Register/Register";
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/orders" element={<RequireAuth><Orders/></RequireAuth>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
