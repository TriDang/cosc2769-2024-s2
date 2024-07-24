import './App.css';
import StudentTable from './StudentTable.jsx';

function App2() {
  const students = [
    { id: 1, name: 'Alice', GPA: 3.2 },
    { id: 2, name: 'Bob', GPA: 2.4 },
    { id: 3, name: 'Carol', GPA: 1.8 },
    { id: 4, name: 'YourFirstName', GPA: 3.9 }
  ];

  return (
    <div className="App2">
      <StudentTable students={students} />
    </div>
  );
}

export default App2;
