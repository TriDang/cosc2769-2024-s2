import React from 'react';

export default function AddCourseForm({
  courseName,
  courseScore,
  onNameChange,
  onScoreChange,
  onAdd,
}) {
  return (
    <div>
      <div>
        <label for="courseName">Course Name</label>
        <input
          id="courseName"
          type="text"
          value={courseName}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div>
        <label for="courseScore">Course Score</label>
        <input
          id="courseScore"
          type="text"
          value={courseScore}
          onChange={(e) => onScoreChange(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}
