import Login from "./components/Login";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Dashboard from "./components/pages/Dashboard";
import ProductsProvider from "./context/ProductsProvider";
import UserProvider from "./context/UserProvider";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorElement from "./components/ErrorElement";
import { useState } from "react";
import ChartsStatus from "./components/pages/ChartsStatus";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login  />}  />

      <Route element={<ProtectedRoutes  />} errorElement= {<ErrorElement/>}>
        <Route
          path="/"
          element={<Layout />}
          
          children={[
            <Route index={true} element={<Dashboard />}  />,
            <Route path="/users" element={<Users />}  />,
            <Route path="/charts" element={<ChartsStatus />}  />,
          ]}
        />
      </Route>
    </>
  )
);

function App() {
  return (
    <ProductsProvider>
      <UserProvider>
        <>
          <RouterProvider router={router}  />
        </>
      </UserProvider>
    </ProductsProvider>
  );
}

export default App;
