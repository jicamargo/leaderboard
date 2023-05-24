import refreshScores from './refreshscores.js';

const addScore = async (event, name, score, game) => {
  event.preventDefault();
  if (name.value === '' || score.value === '') {
    return;
  }
  await game.addScore(name.value, score.value);
  refreshScores(game);
  name.value = '';
  score.value = '';
};

export default addScore;