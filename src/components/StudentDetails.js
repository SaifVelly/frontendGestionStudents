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
        <div>
            <h1>Student Notes</h1>

            {/* Notes Table */}
            <table>
                <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Grade</th>
                </tr>
                </thead>
                <tbody>
                {notes.map((note) => (
                    <tr
                        key={note.id}
                        style={{
                            backgroundColor: note.grade > 10 ? 'lightgreen' : 'lightcoral', // Apply conditional styling
                        }}
                    >
                        <td>{note.courseName}</td>
                        <td>{note.grade}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Add Note Form */}
            <AddNote refreshNotes={fetchNotes} /> {/* Pass fetchNotes as a prop */}
        </div>
    );
};

export default StudentDetails;
