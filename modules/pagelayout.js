import scoreList from './scorelist.js';
import inputScoreForm from './inputscoreform.js';
import game from './game.js';

const pageLayout = () => {
  const lbContainer = document.querySelector('.lb-container');

  scoreList(lbContainer, game);
  inputScoreForm(lbContainer, game);
};

export default pageLayout;