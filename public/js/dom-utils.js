const setAttributes = function(el, attributesObj) {
  if (!attributesObj) return;
  Object.entries(attributesObj).forEach((attr) => {
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    el.setAttribute(...attr);
  });
};

const setTextOrValue = function(el, textOrValue) {
  if (typeof textOrValue === 'undefined') return;
  if (el.hasAttribute('value')) {
    el.value = textOrValue;
  } else {
    el.innerText = textOrValue;
  }
};

const createElement = function(tagName) {
  return function(content = '', attributesObj = {}) {
    const el = document.createElement(tagName);
    setTextOrValue(el, content);
    setAttributes(el, attributesObj);
    return el;
  };
};

const clearChildren = function(element) {
  element.innerHTML = '';
  return element;
};

const createH1 = createElement('H1');
const createH2 = createElement('H2');
const createImg = createElement('IMG');

export {
  createH1,
  createH2,
  createImg,
  clearChildren,
};
