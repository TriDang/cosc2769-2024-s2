document.querySelectorAll('#calendar td.busy').forEach((cell) => {
  cell.addEventListener('click', (evt) => {
    console.log(evt);
    alert(evt.target.innerText);
  });
});
