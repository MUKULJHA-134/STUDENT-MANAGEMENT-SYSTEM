import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {

    e.preventDefault();

    if (!name || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    const oldStudents =
      JSON.parse(localStorage.getItem("students")) || [];

    const newStudent = {
      id: Date.now(),
      name: name,
      email: email,
      course: course
    };

    const updatedStudents = [
      ...oldStudents,
      newStudent
    ];

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    alert("Student added successfully!");

    setName("");
    setEmail("");
    setCourse("");

    navigate("/students");
  }

  return (
    <div className="container">

      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;