const pool = require("./db");


async function addStudent(name, grade) {
  try {
    if (!name || !grade) {
      throw new Error("Invalid student data");
    }

    const result = await pool.query(
      "INSERT INTO students(name, grade) VALUES($1,$2) RETURNING *",
      [name, grade]
    );

    console.log("Student Added:", result.rows[0]);
  } catch (err) {
    console.error("Create Error:", err.message);
  }
}

async function getStudents() {
  try {
    const result = await pool.query("SELECT * FROM students");

    console.log("All Students:");
    console.table(result.rows);
  } catch (err) {
    console.error("Read Error:", err.message);
  }
}

async function updateStudentGrade(id, grade) {
  try {
    const result = await pool.query(
      "UPDATE students SET grade=$1 WHERE id=$2 RETURNING *",
      [grade, id]
    );

    if (result.rowCount === 0) {
      console.log("Student not found");
    } else {
      console.log("Updated:", result.rows[0]);
    }
  } catch (err) {
    console.error("Update Error:", err.message);
  }
}

async function deleteStudent(id) {
  try {
    const result = await pool.query(
      "DELETE FROM students WHERE id=$1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      console.log("Student not found");
    } else {
      console.log("Deleted:", result.rows[0]);
    }
  } catch (err) {
    console.error("Delete Error:", err.message);
  }
}

module.exports = {
  addStudent,
  getStudents,
  updateStudentGrade,
  deleteStudent
};