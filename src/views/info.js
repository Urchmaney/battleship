import { startGame } from '../main';
import renderSetup from './setup';
import '../style.css';

const display = () => {
  const mainDiv = document.getElementById('main');
  const textInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Set Board';
  textInput.setAttribute('placeholder', 'Enter your name');
  mainDiv.appendChild(textInput);
  mainDiv.appendChild(submitBtn);
  mainDiv.classList.add('playerInfo');
  submitBtn.addEventListener('click', () => {
    startGame(textInput.value);
    renderSetup();
  });
};

export default display;
