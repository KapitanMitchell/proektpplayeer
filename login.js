const registerBtn = document.getElementById('register-btn');
registerBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;

  if (name === "" || surname === "") {
    alert("Введіть будь ласка ім'я та прізвище!");
    return;
  } else {
    localStorage.setItem('username', `${name} ${surname}`);
    window.location.href = './home.html';
  }
});