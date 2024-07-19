import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import StudentRow from './StudentRow.jsx';

function StudentTable({ data }) {
  const tableBody = data.map(student =>
    <StudentRow key={student.id} data={student} />
  );
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Major</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
}

export default StudentTable;
