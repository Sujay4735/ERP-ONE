import api from "./axios";

export const loginUser = async (data) => {
  const response = await api.post("/auth/login", {
    email: data.email,
    password: data.password,
  });

  return response.data;
};