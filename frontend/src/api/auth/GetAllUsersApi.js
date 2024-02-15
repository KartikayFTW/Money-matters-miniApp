import axiosInstance from "../axiosInstance";

export const GetAllUsersApi = async (query = "") => {
  try {
    const response = await axiosInstance.get(`auth/bulk_users?filter=${query}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "An error occurred during fetching users."
    );
  }
};
