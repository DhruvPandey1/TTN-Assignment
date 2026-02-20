"use client";

import { useState } from "react";
import './page.css'

export default function StudentsPage() {
  const [teacherName, setTeacherName] = useState("");
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    if(teacherName===""){
        const res=await fetch('/api/student');
        const data=await res.json();

        setStudents(data);
    }
    else{
        const res = await fetch(
        `/api/student?teacherName=${teacherName}`
        );

        const data = await res.json();

        setStudents(data);
    }
    
  };

  return (
    <div className="students-page">
      <h2>Find Students by Teacher</h2>

      <input
        type="text"
        placeholder="Teacher Name"
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
      />

      <button onClick={fetchStudents}>Search</button>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - Mentor: {student.mentor}
          </li>
        ))}
      </ul>
    </div>
  );
}
