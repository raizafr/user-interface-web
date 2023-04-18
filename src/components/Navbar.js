import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar fluid={false} rounded={false} className="bg-emerald-300 md:px-28">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MY APP
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to={"/"} className=" px-7 py-2 rounded-full">
          Home
        </Link>
        <Link to={"/login"} className="bg-secondary px-7 py-2 rounded-full">
          Login
        </Link>
        <Link to={"/register"} className="bg-secondary px-7 py-2 rounded-full">
          Register
        </Link>
        <Link to={"/profile"} className="bg-secondary px-7 py-2 rounded-full">
          Profile
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
