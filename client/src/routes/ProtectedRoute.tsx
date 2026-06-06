import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({
  children,
}: Props) {
  const isAuthenticated =
    useAppSelector(
      (state) => state.auth.isAuthenticated
    );

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;