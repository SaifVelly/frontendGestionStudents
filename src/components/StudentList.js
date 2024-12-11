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
    <div style={styles.container}>
      <h1 style={styles.header}>Students</h1>

      {/* Students Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student.id}
              style={{
                ...styles.tableRow,
                backgroundColor: student.average > 10 ? 'lightgreen' : 'lightcoral', // Conditional styling based on average
              }}
            >
              <td style={styles.tableCell}>
                <Link to={`/student/${student.id}`} style={styles.link}>
                  {student.name}
                </Link>
              </td>
              <td style={styles.tableCell}>{student.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '20px auto',
  },
  header: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    fontSize: '16px',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '10px',
    fontSize: '16px',
  },
  link: {
    textDecoration: 'none',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
};

export default StudentList;
