import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  if (loading) {
    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        "
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
