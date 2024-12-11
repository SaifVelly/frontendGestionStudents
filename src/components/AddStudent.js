
import React, { useState } from 'react';
import { addStudent } from '../services/studentService';

const AddStudent = () => {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    await addStudent(name);
    alert('Student added successfully!');
    setName('');
  };

  return (
    <div>
      <h1>Add Student</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddStudent;
