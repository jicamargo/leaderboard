const game = {
  gameId: 'XB2sm9uVmL28wykfLvy7',
  gameName: 'PAC MAN 2023',
  apiUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',

  readScores: () => fetch(`${game.apiUrl}/${game.gameId}/scores`)
    .then((response) => response.json())
    .catch(() => ({ result: [{ user: 'error', score: 'error' }] })),

  addScore: (user, score) => fetch(`${game.apiUrl}/${game.gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  })
    .then((response) => response.json())
    .catch(() => ({ result: 'score not submitted' })),
};

export default game;
