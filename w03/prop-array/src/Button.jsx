function Button({ cols, value }) {
  return (
    <div className={`col-${3 * cols}`}>
      <button className='btn btn-primary btn-rounded'>
        {value}
      </button>
    </div>
  );
}

export default Button;
