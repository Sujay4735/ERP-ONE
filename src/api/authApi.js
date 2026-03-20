import axios from "axios";

export const loginUser = async (values) => {
  const response = await axios.post(
    "https://dummyjson.com/auth/login",
    {
      username: values.username,
      password: values.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};