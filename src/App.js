import { ToastContainer } from "react-toastify";
import Routing from "./router/router";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <>
      <ToastContainer />
      <NavbarComponent />
      <Routing />
    </>
  );
}

export default App;
