const inputs = document.querySelectorAll('.hang-input');
const gallowEls = document.querySelectorAll('.hang-indicator');
let indexGallowEl = 0;
let trueAnswers = 0;
let falseAnswers = 0;

const words = [
  {
    word: 'банка',
    help1: '',
    help2: '',
    help3: ''
  },
  {
    word: 'баqка',
    help1: '',
    help2: '',
    help3: ''
  },
  {
    word: 'баfка',
    help1: '',
    help2: '',
    help3: ''
  }
];

const indexOfWord = Math.round(Math.random() * (words.length - 1))

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
      if (inputs[i].value.length == 1) {
        
        if (inputs[i].value != words[indexOfWord].word[i]) {
          
          
          // если не угадали букву
          inputs[i].style.backgroundColor = "#ff0000";
          
          gallowEls[indexGallowEl].classList.add('active');
          indexGallowEl++;
          
          if (indexGallowEl >= 5) {
            console.log('You lose!')
            // перевод на следующий экран
          }
          
        } else {
          // правильно введенная буква
          inputs[i].style.backgroundColor = "#00ff00";
        }
        
      }
    });
}