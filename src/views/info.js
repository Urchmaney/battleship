import { startGame } from '../main';
import renderSetup from './setup';
import '../style.css';

const display = () => {
  const mainDiv = document.getElementById('main');
  const infoContainer = document.createElement('div');
  const headerTxt = document.createElement('h1');
  const textInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  headerTxt.innerHTML = "Battleship. Let's Battle.";
  submitBtn.innerHTML = 'Set your ships.';
  textInput.setAttribute('placeholder', 'Enter your name');
  infoContainer.appendChild(headerTxt);
  infoContainer.appendChild(textInput);
  infoContainer.appendChild(submitBtn);
  infoContainer.classList.add('info-container');
  submitBtn.addEventListener('click', () => {
    startGame(textInput.value);
    renderSetup();
  });
  mainDiv.appendChild(infoContainer);
};

export default display;
