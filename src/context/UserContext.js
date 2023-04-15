import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState({
    uuid: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const getDataUser = () => {
    axios
      .get("http://api.dev.indothon.com/api/v1/auth/profile", {
        withCredentials: true,
      })
      .then(function (response) {
        // handle success
        setUser(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  useEffect(() => {
    getDataUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, Provider };
