import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const user = useContext(UserContext);
  console.log(user);
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
