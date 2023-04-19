import { atom } from "recoil";

const userState = atom({
  key: "user-store",
  default: "",
});

export { userState };
