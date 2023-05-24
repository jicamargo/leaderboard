const refreshScores = async (game) => {
  const list = document.getElementById('ul-scores');
  try {
    const scoreListArray = await game.readScores();

    list.innerHTML = scoreListArray.result.map((score) => `
      <li>${score.user}: ${score.score}</li>`).join('');
  } catch (error) {
    list.innerHTML = '<li>There was an error refreshing the scores</li>';
  }
};

export default refreshScores;