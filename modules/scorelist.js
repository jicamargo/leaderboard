const scoreListArray = [
  { name: 'John', score: 85 },
  { name: 'Emma', score: 92 },
  { name: 'Michael', score: 78 },
  { name: 'Sophia', score: 95 },
  { name: 'David', score: 88 },
  { name: 'Olivia', score: 91 },
  { name: 'Daniel', score: 82 },
  { name: 'Isabella', score: 96 },
  { name: 'William', score: 79 },
  { name: 'Ava', score: 90 },
];

const scoreList = (lbContainer) => {
  const newSection = document.createElement('section');
  newSection.classList.add('scores-section');
  newSection.innerHTML = `
    <h2>Recent scores</h2>
    <button>Refresh</button>
    <ul id="ul-scores" class="ul-scores"></ul>
  `;

  lbContainer.appendChild(newSection);

  const list = document.getElementById('ul-scores');
  list.innerHTML = scoreListArray.map((score) => `
        <li>${score.name}: ${score.score}</li>                        
    `).join('');
};

export default scoreList;