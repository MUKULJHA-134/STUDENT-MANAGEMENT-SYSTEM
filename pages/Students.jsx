import { useEffect, useState } from "react";

function Students() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    setStudents(savedStudents);

  }, []);

  function deleteStudent(id) {

    const updatedStudents =
      students.filter((student) => student.id !== id);

    setStudents(updatedStudents);

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Student List</h1>

      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>
        Total Students: {students.length}
      </h3>

      {filteredStudents.length === 0 ? (

        <p>No students found.</p>

      ) : (

        <div>

          {filteredStudents.map((student) => (

            <div className="student-card" key={student.id}>

              <h2>{student.name}</h2>

              <p>Email: {student.email}</p>

              <p>Course: {student.course}</p>

              <button
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Students;