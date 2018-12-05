import {
  createH1,
  createH2,
  createImg,
  clearChildren,
} from './dom-utils.js';

const ui = {};

const initializeSelectors = function() {
  ui.form = document.getElementById('dog-query-form');
  ui.idInput = document.getElementById('dog-id-input');
  ui.dogEl = document.querySelector('.dog-data');
};

const registerListeners = function(handleFormSubmit) {
  ui.form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmit(ui.idInput.value);
  });
};

const renderError = function(message) {
  ui.dogEl.innerHTML = '';
  ui.dogEl.innerText = message;
};

const renderDogName = function(name) {
  return createH1(`Name: ${name}`);
};

const renderDogQuote = function(quote) {
  return createH2(`Quote: "${quote}"`);
};

const renderDogImage = function(imageUrl) {
  return createImg('', {
    src: imageUrl,
  });
};

const renderDog = function(dogData) {
  const {
    name,
    quote,
    imageUrl,
  } = dogData;
  clearChildren(ui.dogEl);
  ui.dogEl.appendChild(renderDogName(name));
  ui.dogEl.appendChild(renderDogQuote(quote));
  ui.dogEl.appendChild(renderDogImage(imageUrl));
};

const initDOMandListeners = function(handleFormSubmit) {
  initializeSelectors();
  registerListeners(handleFormSubmit);
};

export {
  initDOMandListeners,
  renderDog,
  renderError,
};
