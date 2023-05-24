import createInput from './createinput.js';

const inputScoreForm = (lbContainer) => {
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
  scoreBtn.classList.add('submit-btn');

  form.append(nameInput, scoreInput, scoreBtn);
  newSection.appendChild(form);
};

export default inputScoreForm;