import game from './game.js'
import refreshScores from './refreshscores.js'

const addScore = (event, name, score) => {
  event.preventDefault();
  game.addScore(name, score);
  refreshScores();
}
