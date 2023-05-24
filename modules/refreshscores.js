import game from './game.js'; 

const currentGame = game;

const scoreListArray = game.readScores();

const refreshScores = () => {
  const list = document.getElementById('ul-scores');
  list.innerHTML = scoreListArray.map((score) => `
        <li>${score.name}: ${score.score}</li>
    `).join('');  
};



export default refreshScores;