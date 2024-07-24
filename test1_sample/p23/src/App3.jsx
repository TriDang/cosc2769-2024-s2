import { useState } from 'react';
import './App.css';
import DynamicStudentTable from "./DynamicStudentTable.jsx";
import AddCourseForm from "./AddCourseForm.jsx";

const courses = [
  { name: "Full Stack Development", score: 2 },
  { name: "Algorithms", score: 3 },
  { name: "Database Applications", score: 4 },
];

function App3() {
  const [activeCourses, setActiveCourses] = useState(courses);
  const [courseName, setCourseName] = useState("");  // name of the new course
  const [courseScore, setCourseScore] = useState(0);  // score of the new course

  function handleDelete(courseName) {
    const newData = activeCourses.filter(
      (course) => course.name !== courseName
    );
    setActiveCourses(newData);
  }

  function handleNameChange(newName) {
    setCourseName(newName);
  }

  function handleScoreChange(newScore) {
    setCourseScore(newScore);
  }

  function handleAdd() {
    setActiveCourses([
      ...activeCourses,
      { name: courseName, score: parseFloat(courseScore) },
    ]);
  }

  return (
    <div className="App3">
      <DynamicStudentTable onDelete={handleDelete} courses={activeCourses} />
      <AddCourseForm
        courseName={courseName}
        courseScore={courseScore}
        onNameChange={handleNameChange}
        onScoreChange={handleScoreChange}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default App3;
