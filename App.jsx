import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav", score: 78 },
    { id: 2, name: "Diya", score: 35 },
    { id: 3, name: "Kabir", score: 56 },
  ]);

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, score: Number(newScore) || 0 }
          : student
      )
    );
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddStudentForm addStudent={addStudent} />
        <StudentTable students={students} updateScore={updateScore} />
      </div>
    </div>
  );
}

export default App;