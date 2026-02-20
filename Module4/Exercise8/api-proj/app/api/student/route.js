export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const teacherName = searchParams.get('teacherName');
    const res=await fetch('http://localhost:3000/data/students.json');
    const {students}=await res.json();

    if (!teacherName) {
      return Response.json(
        students
      );
    }

    const filteredStudents =students.filter(
      (student) =>
        student.mentor.toLowerCase() === teacherName.toLowerCase()
    );

    return Response.json(filteredStudents);
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
