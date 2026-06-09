import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

import { useAppDispatch } from "./hooks/reduxHooks";

import { getProfileThunk } from "./features/auth/authThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      "
    >
      <Navbar />

      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
