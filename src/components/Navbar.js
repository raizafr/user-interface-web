import { Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { userState } from "../store/UserState";
import axios from "axios";

const NavbarComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const handLogout = () => {
    axios
      .get("http://api.dev.indothon.com/api/v1/auth/logout", {
        withCredentials: true,
      })
      .then(function (response) {
        navigate("/");
      });
  };
  return (
    <Navbar fluid={false} rounded={false} className="bg-emerald-300 md:px-28">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          My App
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {user.is_active ? (
          <>
            <Link to={"/profile"} className=" px-7 py-2 rounded-full">
              {user.username}
            </Link>
            <Link
              onClick={() => handLogout()}
              className="bg-secondary px-7 py-2 rounded-full"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"} className="bg-secondary px-7 py-2 rounded-full">
              Login
            </Link>

            <Link
              to={"/register"}
              className="bg-secondary px-7 py-2 rounded-full"
            >
              Register
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
