document.querySelector('#btnCheck').addEventListener("click", async (e) => {
  const name = document.querySelector('#name').value;
  const url = `https://api.genderize.io/?name=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.gender === 'male') {
    document.querySelector('#result').classList.add('male');
    document.querySelector('#result').classList.remove('female');
  } else {
    document.querySelector('#result').classList.add('female');
    document.querySelector('#result').classList.remove('male');
  }
  document.querySelector('#result').innerHTML = data.gender;
});
