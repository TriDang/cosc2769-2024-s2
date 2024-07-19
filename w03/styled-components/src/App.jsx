import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Calculator
      </h1>
      <div className='container'>
        {/* Result row */}
        <div className='row'>
          <div className='col'>
            <input type='text' />
          </div>
        </div>
        {/* First button row */}
        <div className='row'>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>7</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>8</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>9</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>/</button>
          </div>
        </div>
        {/* Second button row */}
        <div className='row'>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>4</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>5</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>6</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>*</button>
          </div>
        </div>
        {/* Third button row */}
        <div className='row'>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>1</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>2</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>3</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>-</button>
          </div>
        </div>
        {/* Last button row */}
        <div className='row'>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>0</button>
          </div>
          <div className='col-6'>
            <button className='btn btn-primary btn-rounded'>=</button>
          </div>
          <div className='col-3'>
            <button className='btn btn-primary btn-rounded'>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
