const inputs = document.querySelectorAll('.hang-input');
const inputLine = document.querySelector('.hang-inputs');
const gallowEls = document.querySelectorAll('.hang-indicator');
let help = document.querySelector('.hang-btn');
let info = document.querySelector('.hang-info');
let startBtn = document.querySelector('.start-btn');
let start = document.querySelector('.start');
let main = document.querySelector('.container');
let restartLose = document.querySelector('.restart-lose');
let endLose = document.querySelector('.end-lose');
let restartWin = document.querySelector('.restart-win');
let endWin = document.querySelector('.end-win');
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
            console.log('You lose!');
            endLose.style.display = 'flex';
            main.style.display = 'none';
            // перевод на следующий экран
          }

        } else {
          // правильно введенная буква
          if(inputs[0].value == words[indexOfWord].word[0]){
            inputs[0].style.backgroundColor = "#12a112";
            if(inputs[1].value == words[indexOfWord].word[1]){
              inputs[1].style.backgroundColor = "#12a112";
              if(inputs[2].value == words[indexOfWord].word[2]){
                inputs[2].style.backgroundColor = "#12a112";
                if(inputs[3].value == words[indexOfWord].word[3]){
                  inputs[3].style.backgroundColor = "#12a112";
                  if(inputs[4].value == words[indexOfWord].word[4]){
                    console.log('You win!');
                    inputs[4].style.backgroundColor = "#12a112";
                    endWin.style.display = 'flex';
                    main.style.display = 'none';
                  }
                }
              }
            }
          } else {
            endLose.style.display = 'flex';
            main.style.display = 'none';
          }
          // inputs[i].style.backgroundColor = "#12a112";

        }
        
      }
    });
}

for(let i = 0; i <= indexGallowEl; i++){
  restartLose.addEventListener('click', function () {
    main.style.display = 'flex';
    endLose.style.display = 'none';
    gallowEls[i].classList.remove('active');

  });
}
indexGallowEl = 0;

for (let i = 0; i < inputs.length; i++){
    inputs[i].value = '';
}



restartWin.addEventListener('click', function () {
  main.style.display = 'flex';
  endWin.style.display = 'none';
});
