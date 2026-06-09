import {
  Navigate,
} from "react-router-dom";

import {
  useAppSelector,
} from "../hooks/reduxHooks";

interface Props {
  children: React.ReactNode;
}

function PublicRoute({
  children,
}: Props) {

  const {
    isAuthenticated,
    loading,
  } =
    useAppSelector(
      (state) =>
        state.auth
    );

  if (loading) {

    return (
      <div>
        Loading...
      </div>
    );

  }

  if (
    isAuthenticated
  ) {

    return (
      <Navigate
        to="/"
        replace
      />
    );

  }

  return children;
}

export default PublicRoute;