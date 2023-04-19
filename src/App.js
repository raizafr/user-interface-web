import { ToastContainer } from "react-toastify";
import Routing from "./router/router";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavbarComponent />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
