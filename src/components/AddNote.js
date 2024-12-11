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
        <div>
            <h2>Add Note</h2>
            <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Enter course name"
            />
            <input
                type="number"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Enter grade"
            />
            <button onClick={handleAdd}>Add Note</button>
        </div>
    );
};

export default AddNote;
