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
import Resetpass from "./components/Resetpass";
import Editor from "./components/Editor";
import Resetpassword from "./components/Resetpassword";
import Error from "./components/Error";
import Cookies from "js-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const auth = Cookies.get("userToken");

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            <>
              <Route path="/" element={<Share />}>
                <Route path="/" element={<Main />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:Extquery" element={<Store />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/wishlist" element={<Fav />} />
                <Route path="/Product/:name" element={<Product />} />
              </Route>
              <Route path="/Signup" element={<Signup />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/Resetpass" element={<Resetpass />} />
              <Route path="*" element={<Error />} />
            </>
          }
          {!auth ? (
            <Route path="*" element={<Error />} />
          ) : (
            <>
              <Route path="/Editor" element={<Editor />} />
              <Route path="/Resetpassword" element={<Resetpassword />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
