import {
  useEffect,
} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

import {
  useAppDispatch,
} from "./hooks/reduxHooks";

import {
  getProfileThunk,
} from "./features/auth/authThunk";

function App() {

  const dispatch =
    useAppDispatch();

  useEffect(() => {

    dispatch(
      getProfileThunk()
    );

  }, [dispatch]);

  return (
    <>
      <Navbar />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;