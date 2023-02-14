export const verifyTransaction = async (axios, secretKey, ref) => {
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${ref}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "content-type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
