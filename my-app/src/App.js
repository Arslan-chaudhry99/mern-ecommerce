import Nav from "./components/Nav";
import Store from "./components/Store";
import Main from "./components/Main";
import SignupBt from "./components/SignupBt";
import Footer from "./components/Footer";
import CheckOut from "./components/CheckOut";
import Product from "./components/Product";
import About from "./components/About";
import Share from "./Share";
import Contact from "./components/Contact";
import FQR from "./components/Fqr.JS";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Fav from "./components/Fav";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Share />}>
            <Route path="/" element={<Main />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/wishlist" element={<Fav />} />
            <Route path="/Product/:name" element={<Product />} />
          </Route>
          <Route path="/Editor" element={<Editor />} />
          <Route path="/Preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
