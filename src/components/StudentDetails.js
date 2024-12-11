import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNotesByStudentId } from '../services/noteService';
import AddNote from './AddNote'; // Import AddNote component

const StudentDetails = () => {
    const { id } = useParams(); // Retrieve the student ID from the URL
    const [notes, setNotes] = useState([]); // State for notes

    // Function to fetch notes for the student
    const fetchNotes = async () => {
        try {
            const data = await getNotesByStudentId(id); // Call the API to fetch notes
            setNotes(data); // Update the notes state
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    // Fetch notes when the component mounts or the ID changes
    useEffect(() => {
        fetchNotes();
    }, [id]);

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Student Notes</h2>

            {/* Notes Table */}
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>Course Name</th>
                        <th style={styles.tableHeader}>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr
                            key={note.id}
                            style={{
                                ...styles.tableRow,
                                backgroundColor: note.grade > 10 ? 'lightgreen' : 'lightcoral', // Apply conditional styling
                            }}
                        >
                            <td style={styles.tableCell}>{note.courseName}</td>
                            <td style={styles.tableCell}>{note.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add Note Form */}
            <AddNote refreshNotes={fetchNotes} /> {/* Pass fetchNotes as a prop */}
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
};

export default StudentDetails;
