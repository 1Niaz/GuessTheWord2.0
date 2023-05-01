const inputs = document.querySelectorAll('.hang-input');
const gallowEls = document.querySelectorAll('.hang-indicator');
let help = document.querySelector('.hang-btn');
let indexGallowEl = 0;
let trueAnswers = 0;
let falseAnswers = 0;

const words = [
  {
    word: 'apple',
    help1: 'a',
    help2: 'p',
    help3: 'l'
  },
  {
    word: 'taste',
    help1: 't',
    help2: 'a',
    help3: 's'
  },
  {
    word: 'anime',
    help1: 'a',
    help2: 'n',
    help3: 'i'
  }
];

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


