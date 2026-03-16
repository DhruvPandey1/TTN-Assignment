const student = require("./studentModel");

async function runCRUD() {

  await student.addStudent("Dhruv", "A");
  await student.addStudent("Harsh", "A");
  await student.addStudent("Aman", "B");
  await student.addStudent("Sourav", "B+");

  await student.getStudents();

  await student.updateStudentGrade(1, "A+");

  await student.deleteStudent(3);

  await student.getStudents();
}

runCRUD();