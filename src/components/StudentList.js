
import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../services/studentService';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getAllStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              style={{
                backgroundColor: student.average > 10 ? 'lightgreen' : 'lightcoral',
              }}
            >
              <td>
                <Link to={`/student/${student.id}`}>{student.name}</Link>
              </td>
              <td>{student.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
