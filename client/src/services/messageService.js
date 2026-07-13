import api from "./api";

export const getUsers = async () => {
  const res = await api.get("/users");

  return res.data;
};

export const getMessages = async (id) => {
  const res = await api.get(`/messages/${id}`);

  return res.data;
};

export const sendMessage = async (formData) => {
  const res = await api.post(
    "/messages",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
  return res.data;
};