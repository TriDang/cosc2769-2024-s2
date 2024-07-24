import React from 'react';

export default function DynamicStudentTable({ onDelete, courses }) {
  let sum = 0;
  const data = courses.map((course) => {
    sum += course.score;
    return (
      <tr>
        <td>{course.name}</td>
        <td>{course.score}</td>
        <td>
          <button type="button" onClick={() => onDelete(course.name)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  let avg = sum / courses.length;

  return (
    <>
      <table>
        <tr>
          <th>Course Name</th>
          <th>Score</th>
          <th>&nbsp;</th>
        </tr>
        {data}
      </table>
      <div>Average score: {avg}</div>
    </>
  );
}
