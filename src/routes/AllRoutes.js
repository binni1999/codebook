import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  DashboardPage,
  HomePage,
  Login,
  PageNotFound,
  ProductDetail,
  ProductsList,
  Register,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { OrderPage } from "../pages/Order/OrderPage";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <CartPage />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <OrderPage />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <DashboardPage />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
