import React, { useState } from 'react';
import { addStudent } from '../services/studentService';

const AddStudent = () => {
    const [name, setName] = useState('');

    const handleAdd = async () => {
        if (!name) {
            alert('Please enter a name.');
            return;
        }
        await addStudent(name);
        alert('Student added successfully!');
        setName('');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Add Student</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter student name"
                style={styles.input}
            />
            <button onClick={handleAdd} style={styles.button}>Add</button>
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
        maxWidth: '400px',
        margin: '20px auto',
    },
    header: {
        marginBottom: '20px',
        color: '#333',
        fontSize: '24px',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};

export default AddStudent;
