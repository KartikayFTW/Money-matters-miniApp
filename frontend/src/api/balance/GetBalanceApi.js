import axiosInstance from "../axiosInstance";

export const GetBalanceApi = async () => {
  try {
    const response = await axiosInstance.get("/account/balance");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "An error occurred during sign ip."
    );
  }
};
