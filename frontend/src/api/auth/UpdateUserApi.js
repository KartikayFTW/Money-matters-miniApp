import axiosInstance from "../axiosInstance";

export const UpdateUserApi = async (userData) => {
  try {
    const response = await axiosInstance.put("/auth/update_user", userData);
    return response.data;
  } catch (error) {
    console.log("update error", error);
    throw new Error(
      error.response?.data?.msg || "Update user. Try again later."
    );
  }
};
