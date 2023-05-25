import createInput from './createinput.js';
import addScore from './addscore.js';

const inputScoreForm = (lbContainer, game) => {
  const newSection = document.createElement('section');
  newSection.classList.add('input-section');
  newSection.innerHTML = `
    <h2>Add your score</h2>
  `;

  lbContainer.appendChild(newSection);

  const form = document.createElement('form');

  const nameInput = createInput('text', 'name', 'Your name');
  const scoreInput = createInput('text', 'score', 'Your Score');
  const scoreBtn = document.createElement('button');
  scoreBtn.innerText = 'Submit';
  scoreBtn.classList.add('button');
  scoreBtn.addEventListener('click', (e) => { addScore(e, nameInput, scoreInput, game); });

  form.append(nameInput, scoreInput, scoreBtn);
  newSection.appendChild(form);
};

export default inputScoreForm;