import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Router from "./router/router";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Router />
    </>
  );
}

export default App;
