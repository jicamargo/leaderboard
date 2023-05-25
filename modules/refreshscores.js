const refreshScores = async (game) => {
  const list = document.getElementById('ul-scores');
  try {
    const scoreListArray = await game.readScores();

    let html = '';
    scoreListArray.result.forEach((score) => {
      const formattedName = score.user
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      html += `
        <li>
          <span class="span-name">${formattedName}</span>
          <span class="span-score">${score.score}</span>
        </li>`;
    });

    list.innerHTML = html;
  } catch (error) {
    list.innerHTML = '<li>There was an error refreshing the scores</li>';
  }
};

export default refreshScores;
