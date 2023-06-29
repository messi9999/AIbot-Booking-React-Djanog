import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_BASEURL + "/api/auth/";

const register = (username, email, password, roles) => {
  return axios.post(API_URL + "register/", {
    username,
    email,
    password,
    roles
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login/", {
      email,
      password
    })
    .then((response) => {
      if (response.data.tokens) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = (refreshToken) => {
  return axios
    .post(
      API_URL + "logout/",
      { refresh: refreshToken },
      {
        headers: authHeader()
      }
    )
    .then((res) => {
      localStorage.removeItem("user");
    })
    .catch((err) => {
      localStorage.removeItem("user");
    });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout
};
