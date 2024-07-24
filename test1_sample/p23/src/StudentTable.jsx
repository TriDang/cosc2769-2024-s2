import React from 'react';

export default function StudentTable({ students }) {
  const data = students.map((std) => {
    let grade = "NN";
    if (std.GPA >= 2 && std.GPA < 3) {
      grade = "OK";
    } else if (std.GPA >= 3) {
      grade = "HD";
    }
    return (
      <tr>
        <td>{std.id}</td>
        <td>{std.name}</td>
        <td>{std.GPA}</td>
        <td>{grade}</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>GPA</th>
        <th>Grade</th>
      </tr>
      {data}
    </table>
  );
}
