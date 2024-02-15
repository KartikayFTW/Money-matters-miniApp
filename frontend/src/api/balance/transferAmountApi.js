import axiosInstance from "../axiosInstance";

export const TransferAmountApi = async (transferdata) => {
  try {
    const response = await axiosInstance.post(
      "/account/transfer",
      transferdata
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Transfer failed. Try again.");
  }
};
