function Button({ cols, value, type, onClick }) {
  function handleClick() {
    onClick(type, value);
  }

  return (
    <div className={`col-${3 * cols}`}>
      <button className='btn btn-primary btn-rounded' onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
