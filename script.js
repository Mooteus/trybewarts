// Receive loginClick and Validate Login Form
const loginClick = document.getElementById('login');

loginClick.addEventListener('click', () => {
  const loginText = document.getElementById('email').value;
  const loginPass = document.getElementById('password').value;

  if (loginText !== 'tryber@teste.com' || loginPass !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Count textarea characters limit
const countTextArea = document.getElementById('textarea');
countTextArea.addEventListener('input', () => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - countTextArea.value.length;
});

// enable | disable button
const buttonCheck = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
agreement.addEventListener('change', () => {
  if (agreement.checked) {
    buttonCheck.disabled = false;
  } else {
    buttonCheck.disabled = true;
  }
});
