import api from "./axios";

export const getAllUsers = async () => {
  const response = await api.get("/admin/users");

  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/admin/users/${id}`);

  return response.data;
};

export const getAllOrders = async () => {
  const response = await api.get("/admin/orders");

  return response.data;
};

export const updateOrderStatus = async (id: string, status: string) => {
  const response = await api.put(`/admin/orders/${id}/status`, { status });

  return response.data;
};
