import axiosInstance from "../../../helpers/axios";

export const register = ({
  email,
  password,
  username,
  lastName: last_name,
  firstName: first_name,
}) => (dispatch) => {
  axiosInstance
    .post("/auth/register", {
      email,
      password,
      username,
      last_name,
      first_name,
    })
    .then((res) => console.log("res", res))
    .catch((err) => console.log("e", err));
};
