'use strict';
console.log(document.querySelector('.message').textContent);

/* dom stands for document object model: structured representation of html documents, allows javascript to access html elements and styles to manipulate them
 */
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
//setting score
let score = 20;
let highScore=0;
document.querySelector('.check').addEventListener('click', function () {
  //since when we take input from the dom we always get a string so we need to convert it to a number
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');
  //when there is no input
  if (!guess) {
    message.textContent = '💥❗No Number ';
    //when there is winning
  } else if (guess === number) {
    message.textContent = '🎉Correct Number';
    const body = document.querySelector('body');
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    if(score>highScore)
    {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }

    document.querySelector('.number').style.width='30rem';
  } else if (guess > number) {
    if (score > 1) {
      message.textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😛 You Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      message.textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '😛 You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const again=document.querySelector('.again');
again.addEventListener('click',reset);


function reset()
{
    number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
}

