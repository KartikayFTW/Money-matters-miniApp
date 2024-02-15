import axiosInstance from "../axiosInstance";

export const GetUserDetailsApi = async () => {
  try {
    const response = await axiosInstance.get("auth/user_details");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred during fetching user details."
    );
  }
};
