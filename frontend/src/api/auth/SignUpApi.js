import axiosInstance from "../axiosInstance";

export const signUp = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/sign_up", userData);
    return response.data;
  } catch (error) {
    console.log("signup error", error);
    throw new Error(error.response?.data?.msg || "Signup failed. Try again.");
  }
};
