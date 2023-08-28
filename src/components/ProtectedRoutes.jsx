
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const ProtectedRoutes = () => {


   const {auth} = useContext(UserContext)

    console.log('desde pr',auth);
  
    
    if (!auth) {
      return <Navigate to="/login" />;
    }
  
    return <Outlet />;
  };
  
  export default ProtectedRoutes;