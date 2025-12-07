import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect user to login page
    return <Navigate to="/login" replace />;
  }

  return children;
}
