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

function generateParagraph(text) {
  const paragraph = document.createElement('p');
  const infoContainer = document.getElementById('info-container');
  paragraph.innerText = text;
  infoContainer.appendChild(paragraph);
}

function getFamily() {
  const frontEnd = document.getElementById('frontend');
  const backEnd = document.getElementById('backend');
  const fullStack = document.getElementById('fullstack');

  if (frontEnd.checked) {
    return frontEnd.value;
  } if (backEnd.checked) {
    return backEnd.value;
  } if (fullStack.checked) {
    return fullStack.value;
  }
}

function getTechs() {
  const subjects = document.querySelectorAll('.subject');
  const content = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      content.push(subjects[index].value);
    }
  }
  return content.join(', ');
}

function getRate() {
  const rate = document.querySelectorAll('.rate');

  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      return rate[index].value;
    }
  }
}
const form = document.getElementById('evaluation-form');

form.addEventListener('submit', () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = getFamily();
  const techs = getTechs();
  const rate = getRate();
  const textArea = document.getElementById('textarea').value;
  generateParagraph(`Nome: ${name} ${lastName}`);
  generateParagraph(`Email: ${email}`);
  generateParagraph(`Casa: ${house}`);
  generateParagraph(`Família: ${family}`);
  generateParagraph(`Matérias: ${techs}`);
  generateParagraph(`Avaliação: ${rate}`);
  generateParagraph(`Observações: ${textArea}`);
});
