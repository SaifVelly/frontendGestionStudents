
import axios from 'axios';

const API_URL = 'http://localhost:8080/students';

export const getAllStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addStudent = async (name) => {
  const response = await axios.post(API_URL, null, { params: { name } });
  return response.data;
};
