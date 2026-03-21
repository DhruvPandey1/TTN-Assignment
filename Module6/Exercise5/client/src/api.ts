const BASE_URL = "http://localhost:5000";
import axios from "axios";

export const getTodos = async () => {
  const res = await axios.get(`${BASE_URL}/todos`);
  return res.data;
};

export const createTodo = async (title: string) => {
  const res = await axios.post(`${BASE_URL}/todos`, {
    title,
  })
  return res.data;
};