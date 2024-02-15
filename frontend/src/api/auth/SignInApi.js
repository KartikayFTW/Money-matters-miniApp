import axiosInstance from "../axiosInstance";

export const SignInApi = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/sign_in", userData);
    return response.data;
  } catch (error) {
    console.log("signin error", error);
    throw new Error(
      error.response?.data?.msg || "Login error. Try again later."
    );
  }
};
