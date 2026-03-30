import { api } from "./api.js";


export const signup = async (userData) => {
  try {
    const respone = await api.post("/users/signup", userData);
    return respone.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    throw new Error(errorMessage);
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/users/login", credentials);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Login failed. Please check your details.";
    throw new Error(errorMessage);
  }
};
