import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formlogin = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handlingLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://api.dev.indothon.com/api/v1/auth/login", login, {
        withCredentials: true,
      })
      .then(function (response) {
        navigate("/profile");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="flex justify-center mt-16">
      <div className="bg-primary w-1/3 rounded">
        <div className="text-center text-font-color text-xl font-bold mt-4 mb-9">
          Login
        </div>
        <form onSubmit={handlingLogin}>
          <div className="px-16 py-2">
            <label htmlFor="email" className="text-xs text-white">
              Email Address
            </label>{" "}
            <br />
            <input
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              type="email"
              placeholder="example@gmail.com"
              name="email"
              className="w-full px-4 py-1 rounded focus:outline-none"
            />
          </div>
          <div className="px-16 py-2">
            <label htmlFor="password" className="text-xs text-white">
              Password
            </label>{" "}
            <br />
            <input
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              type="password"
              placeholder="your password"
              name="email"
              className="w-full px-4 py-1 rounded focus:outline-none"
            />
          </div>
          <div className="px-16 my-4">
            <a href="#" className="font-bold text-font-color">
              Forgot Password
            </a>
          </div>
          <div className="text-center mt-10 pb-20">
            <button
              type="submit"
              className="bg-secondary text-font-color font-bold text-xl px-14 py-2 rounded-full hover:bg-green-500 hover:text-white"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Formlogin;
