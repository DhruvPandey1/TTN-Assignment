"use client";

import { useEffect, useState } from "react";
import './page.css'

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    id:0,
    name: "",
    subject: "",
  });

  const getTeachers = async () => {
    const res = await fetch("/api/teacher");
    const data = await res.json();
    setTeachers(data.teachers || []);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/teacher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ id:0, name: "", subject: "" });
      getTeachers();
    }
  };

  return (
    <div className="teachers-page">
      <h2>Add Teacher</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Id"
          value={form.id}
          onChange={(e) =>
            setForm({ ...form, id: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
          required
        />

        <button type="submit">Add</button>
      </form>

      <h2>Teachers List</h2>
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>
            {teacher.name} - {teacher.subject}
          </li>
        ))}
      </ul>
    </div>
  );
}
