import refreshScores from './refreshscores.js';

const scoreList = (lbContainer) => {
  const newSection = document.createElement('section');
  const refreshBtn = null;

  newSection.classList.add('scores-section');
  newSection.innerHTML = `
    <h2>Recent scores</h2>
    <button id="refreshBtn" class="button">Refresh</button>
    <ul id="ul-scores" class="ul-scores"></ul>
  `;

  lbContainer.appendChild(newSection);
  refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.addEventListener('click', () => {refreshScores();});
  refreshScores();
};

export default scoreList;