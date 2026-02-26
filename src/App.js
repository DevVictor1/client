import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import CartProvider from "./context/CartContext";
import Checkout from "./pages/Checkout"
import MyOrders from "./pages/MyOrders";
import AuthProvider from "./context/AuthContext";
import ToastProvider from "./context/ToastContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="app-shell">
              <Navbar />
              <main className="app-main">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/myorders"
                    element={
                      <ProtectedRoute>
                        <MyOrders />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <PublicRoute>
                        <Login />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/signup"
                    element={
                      <Navigate to="/register" replace />
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <PublicRoute>
                        <Signup />
                      </PublicRoute>
                    }
                  />
                  <Route path="/myOrders" element={<Navigate to="/myorders" replace />} />
                </Routes>
              </main>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;
