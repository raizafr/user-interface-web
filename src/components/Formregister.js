import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Formregister = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const handlingRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://api.dev.indothon.com/api/v1/auth/register", register, {
        withCredentials: true,
      })
      .then(function (response) {
        toast.warning("Silahkan cek email untuk untuk mendapatkan kode otp !");
        navigate("/confirmotp?token=" + response.data.otp_token);
      })
      .catch(function (error) {
        toast.error(
          "Pastikan mengisi semua field dan menggunakan email yang belum terdaftar"
        );
      });
  };
  return (
    <section className="flex justify-center mt-10">
      <div className="bg-primary w-1/3 rounded ">
        <div className="text-center text-font-color text-xl font-bold mt-4 mb-9">
          Register
        </div>
        <form onSubmit={handlingRegister}>
          <div className="px-16 py-2">
            <label htmlFor="firstname" className="text-xs text-white">
              First name
            </label>{" "}
            <br />
            <input
              onChange={(e) =>
                setRegister({ ...register, first_name: e.target.value })
              }
              type="text"
              placeholder="first name"
              name="firstname"
              className="w-full px-4 py-1 rounded focus:outline-none"
            />
          </div>
          <div className="px-16 py-2">
            <label htmlFor="text" className="text-xs text-white">
              Last name
            </label>{" "}
            <br />
            <input
              onChange={(e) =>
                setRegister({ ...register, last_name: e.target.value })
              }
              type="text"
              placeholder="last name"
              name="lastname"
              className="w-full px-4 py-1 rounded focus:outline-none"
            />
          </div>
          <div className="px-16 py-2">
            <label htmlFor="text" className="text-xs text-white">
              Username
            </label>{" "}
            <br />
            <input
              onChange={(e) =>
                setRegister({ ...register, username: e.target.value })
              }
              type="text"
              placeholder="username"
              name="lastname"
              className="w-full px-4 py-1 rounded focus:outline-none"
            />
          </div>
          <div className="px-16 py-2">
            <label htmlFor="email" className="text-xs text-white">
              Email Address
            </label>{" "}
            <br />
            <input
              required
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
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
              required
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
              type="password"
              placeholder="your password"
              name="email"
              className="w-full px-4 py-1 rounded focus:outline-none"
            />
          </div>
          <div className="text-center mt-10 pb-8">
            <button className="bg-secondary text-font-color font-bold text-xl px-14 py-2 rounded-full hover:bg-green-500 hover:text-white">
              Continue
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Formregister;
