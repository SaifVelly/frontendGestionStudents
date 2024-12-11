
import axios from 'axios';

const API_URL = 'http://localhost:8080/notes';

export const getNotesByStudentId = async (studentId) => {
  const response = await axios.get(`${API_URL}/${studentId}`);
  return response.data;
};
export const addNote = async (studentId, courseName, grade) => {
  const response = await axios.post(`http://localhost:8080/notes`, null, {
    params: { studentId, courseName, grade },
  });
  return response.data;
};
