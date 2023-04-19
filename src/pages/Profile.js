// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../store/UserState";

const Profile = () => {
  const navigate = useNavigate();

  const [userStore, setUserStore] = useRecoilState(userState);
  const [user, setUser] = useState({
    uuid: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const getUser = async () => {
    try {
      const response = await axios.get(
        "http://api.dev.indothon.com/api/v1/auth/profile",
        { withCredentials: true }
      );
      setUser(response.data);
      setUserStore(response.data);
    } catch (error) {
      navigate("/login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="flex justify-center mt-16">
      <div className="bg-primary w-1/3 rounded">
        <div className="text-center text-font-color text-xl font-bold mt-4 mb-9">
          Profile
        </div>
        <div className="text-white text-xl text-center pb-14">
          <ul className="space-y-2">
            <li>firsname {user.first_name}</li>
            <li>lastname {user.last_name} </li>
            <li>username {user.username} </li>
            <li>email {user.email} </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
