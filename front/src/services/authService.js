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
