import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

interface Props {
  children: React.ReactNode;
}

function AdminRoute({ children }: Props) {
  const { user, loading } = useAppSelector((state) => state.auth);

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

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
