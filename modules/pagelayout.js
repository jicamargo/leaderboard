import scoreList from '../modules/scorelist.js';
import inputScoreForm from '../modules/inputscoreform.js';

const pageLayout = () => {
  const lbContainer = document.querySelector('.lb-container');

  scoreList(lbContainer);
  inputScoreForm(lbContainer);

};

export default pageLayout;