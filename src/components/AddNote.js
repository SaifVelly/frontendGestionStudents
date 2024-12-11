import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addNote } from '../services/noteService';

const AddNote = ({ refreshNotes }) => {
    const { id } = useParams(); // Get the student ID from the URL
    const [courseName, setCourseName] = useState('');
    const [grade, setGrade] = useState('');

    const handleAdd = async () => {
        if (!courseName || !grade) {
            alert('Please fill out all fields.');
            return;
        }
        await addNote(id, courseName, parseFloat(grade));
        alert('Note added successfully!');
        setCourseName('');
        setGrade('');
        refreshNotes(); // Refresh notes list
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Add Note</h2>
            <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Enter course name"
                style={styles.input}
            />
            <input
                type="number"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Enter grade"
                style={styles.input}
            />
            <button onClick={handleAdd} style={styles.button}>Add Note</button>
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

export default AddNote;