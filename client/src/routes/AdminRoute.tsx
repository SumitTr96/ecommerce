import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

interface Props {
  children: React.ReactNode;
}

function AdminRoute({ children }: Props) {
  const user = useAppSelector(
    (state) => state.auth.user
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;