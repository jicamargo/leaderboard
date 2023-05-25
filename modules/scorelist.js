import refreshScores from './refreshscores.js';

const scoreList = (lbContainer, game) => {
  const newSection = document.createElement('section');

  newSection.classList.add('scores-section');
  newSection.innerHTML = `
    <h2>Recent scores</h2>
    <button id="refreshBtn" class="button">Refresh</button>
    <ul id="ul-scores" class="ul-scores"></ul>
  `;

  lbContainer.appendChild(newSection);
  const refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.addEventListener('click', () => { refreshScores(game); });
  refreshScores(game);
};

export default scoreList;