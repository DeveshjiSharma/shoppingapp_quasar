import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import Dashboard from "./pages/admin/dashboard/dashboard";
import Order from "./pages/order/Order";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DotLoader from "react-spinners/DotLoader";
const App = () => {
  const [load, setLoad] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#0dd354",
    position: "fixed",
    top: "50%",
    left: "50%",
    color: "#0dd354",
    transform: "translate(-50%, -50%)",
  };
  useEffect(() => {
    setLoad(true); // Set load to true immediately when the component mounts
    setTimeout(() => {
      setLoad(false); // Set load to false after 8000 milliseconds
    }, 2000);
  }, []);
  return (
    <div className="App">
      {load ? (
        <DotLoader cssOverride={override} />
      ) : (
        <MyState>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/order"
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRouteForAdmin>
                    <Dashboard />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/addproduct"
                element={
                  <ProtectedRouteForAdmin>
                    <AddProduct />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route
                path="/updateproduct"
                element={
                  <ProtectedRouteForAdmin>
                    <UpdateProduct />
                  </ProtectedRouteForAdmin>
                }
              />
              <Route
                path="/productinfo/:id"
                element={
                  <ProtectedRoute>
                    <ProductInfo />
                  </ProtectedRoute>
                }
              />
              <Route path="/*" element={<NoPage />} />
            </Routes>
            <ToastContainer />
          </Router>
        </MyState>
      )}
    </div>
  );
};

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "dev@gmail.com") {
    return children;
  } else {
    <Navigate to={"/login"} />;
  }
};

/* <ClipLoader
  loading={load}
  cssOverride={override}
  size={150}
  color={"#f37a24"}
  aria-label="Loading Spinner"
  data-testid="loader"
/> */
