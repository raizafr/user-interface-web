import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Otp = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const getToken = queryParams.get("token");

  const [otp, setOtp] = useState();
  const confirmOtp = { otp_token: getToken, otp_code: otp };
  const handlingOtp = (e) => {
    e.preventDefault();
    console.log(confirmOtp);
    axios
      .post(
        "http://api.dev.indothon.com/api/v1/auth/register_otp",
        confirmOtp,
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        navigate("/login");
        toast.info("konfirmasi berhasil");
      })
      .catch(function (error) {
        toast.error("Pastikan kode otp benar");
      });
  };
  return (
    <section className="flex justify-center mt-10">
      <form className="bg-primary w-1/3 rounded" onSubmit={handlingOtp}>
        <div className="text-center text-font-color text-xl font-bold mt-5 mb-7">
          Kode Otp
        </div>
        <div className="px-16 py-2">
          <input
            required
            onChange={(e) => setOtp(e.target.value)}
            type="number"
            placeholder="masukan kode otp"
            name="otpcode"
            className="w-full px-4 py-1 rounded focus:outline-none"
          />
        </div>
        <div className="text-center mt-10 pb-16">
          <button
            type="submit"
            className="bg-secondary text-font-color font-bold text-xl px-14 py-2 rounded-full hover:bg-green-500 hover:text-white"
          >
            Continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default Otp;
