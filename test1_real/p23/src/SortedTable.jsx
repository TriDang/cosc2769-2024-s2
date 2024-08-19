import React, { useState } from 'react';

export default function SortedTable({ students }) {
  const [studentData, setStudentData] = useState(students);

  function sortName() {
    const copy = [...studentData];
    copy.sort((s1, s2) => s1.name.localeCompare(s2.name));
    setStudentData(copy);
  }

  function sortGPA() {
    const copy = [...studentData];
    copy.sort((s1, s2) => s1.GPA - s2.GPA);
    setStudentData(copy);
  }

  const data = studentData.map((student) => {
    return (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.major}</td>
        <td>{student.GPA}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th><a href="#" onClick={() => sortName()}>Name</a></th>
          <th>Major</th>
          <th><a href="#" onClick={() => sortGPA()}>GPA</a></th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  );
}
