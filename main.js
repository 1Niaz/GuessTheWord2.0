const inputs = document.querySelectorAll('.hang-input');
const gallowEls = document.querySelectorAll('.hang-indicator');
let indexGallowEl = 0;
let trueAnswers = 0;
let falseAnswers = 0;
const word = {
  word: 'привет',
  help1: '',
  help2: '',
  help3: ''
};

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function (e) {
    if (inputs[i] === word.word[i]) {
      trueAnswers++;
      // удалить элемент inputs[i] из inputs, чтобы больше его не слушать
    } else {
      falseAnswers++;
      gallowEls[indexGallowEl].classList.add('active');
      indexGallowEl++;
    }
    if (falseAnswers >= 5) {
      // проигрыш
    }
    if (trueAnswers == 5) {
      // победа
    }
  });
}