const game = {
  gameId: 'XB2sm9uVmL28wykfLvy9',
  gameName: 'PAC MAN 2023',
  apiUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
  
  readScores: async function() {
    try {
      const response = await fetch(`${this.apiUrl}/${this.gameId}/scores`);
      const data = await response.json();
      return data;
    } catch (error) {
      return {"result":[{"user":"error","score":"error"}]}
    }
  },
  
  addScore: async function(user, score) {
    try {
      const response = await fetch(`${this.apiUrl}/${this.gameId}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return {"result":"score not submitted"}
    }
  }
};

export default game;
