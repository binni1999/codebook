import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  let token = JSON.parse(sessionStorage.getItem("token"));
  //token = true; //need to change later
  return token ? children : <Navigate to={"/login"} />;
};
