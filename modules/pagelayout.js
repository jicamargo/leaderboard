import scoreList from './scorelist.js';
import inputScoreForm from './inputscoreform.js';

const pageLayout = () => {
  const lbContainer = document.querySelector('.lb-container');

  scoreList(lbContainer);
  inputScoreForm(lbContainer);
};

export default pageLayout;