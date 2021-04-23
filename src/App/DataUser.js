import { atom } from "recoil";

export const DataUser = atom({
  key: "DataUser",
  default: JSON.parse(localStorage.getItem("USER")) || {},
});
export const removeLocalStorage = () => {
  localStorage.removeItem("USER");
};
export const addLocalStorage = (data) => {
  localStorage.setItem("USER", JSON.stringify(data.user));
};
