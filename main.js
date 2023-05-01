const inputs = document.querySelectorAll('.hang-input');
const gallowEls = document.querySelectorAll('.hang-indicator');
let help = document.querySelector('.hang-btn');
let info = document.querySelector('.hang-info');
let startBtn = document.querySelector('.start-btn');
let start = document.querySelector('.start');
let main = document.querySelector('.container');
let indexGallowEl = 0;
let trueAnswers = 0;
let falseAnswers = 0;

const words = [
  {
    word: 'adopt',
    help: 'Приручить',
  },
  {
    word: 'angry',
    help: 'Злой',
  },
  {
    word: 'actor',
    help: 'Актёр',
  }
];

startBtn.addEventListener('click', function () {
  main.style.display = 'flex';
  start.style.display = 'none';

});

help.addEventListener('click', function(){
  alert(words[indexOfWord].help);
  gallowEls[indexGallowEl].classList.add('active');
  indexGallowEl++;
});
const indexOfWord = Math.round(Math.random() * (words.length - 1))

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
      if (inputs[i].value.length == 1) {

        if (inputs[i].value != words[indexOfWord].word[i]) {


          // если не угадали букву
          inputs[i].style.backgroundColor = "#be0808";

          gallowEls[indexGallowEl].classList.add('active');
          indexGallowEl++;

          if (indexGallowEl >= 5) {
            console.log('You lose!')
            // перевод на следующий экран
          }

        } else {
          // правильно введенная буква
          inputs[i].style.backgroundColor = "#12a112";
        }

      }
    });
}