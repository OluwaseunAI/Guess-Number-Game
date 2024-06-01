const inputField = document.querySelector('.guess');
const enterButton = document.querySelector('.button');
const outputPara = document.querySelector('.output-p');
const attemptsSpan = document.querySelector('.output span');

//Generate a random number using Math.floor(Math.random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(Math.floor(Math.random(0, 8)));


enterButton.addEventListener('click', guessNumber);

  let attemptNo = 3; //max_attempts
  function generateSecretNumber() {
    const minNum = 0;
    const maxNum = 100;
    //const maxNum = 10;

    // const secretNumber = getRandomNumber(minNum, maxNum);
    secretNumber = getRandomNumber(minNum, maxNum);
  }
// function checks if the userGuess against unknown number
function guessNumber() {


   const arrayQuirkySet = ["Oops, you've been gamed! \u{1F929}", "I win, you lose \u{1F971}", "Try Again, Try not to get the L \u{1F602}", "This time you're no g\*\*d! \u{1F616}", "Is this your best\? Pretty sure it ain\'t u{1F601}"];
 const arrayCongratSet = ["You bested me \u{1F910} \n Congrats, anyway!", "Big up, Number King \u{1F644}", "Spot on, Punters watch this man \u{1F612}", "Right there, we have an octopus in u \u{1F621}", "How did u guess that,\nUghh.. Congrats tho \u{1F611}"];

    let userGuess = parseInt(inputField.value);
    const minNum = 0;
    const maxNum = 100;

    //  userGuess = prompt(`Guess a number between ${minNum} and ${maxNum}:`);
     attemptsSpan.textContent = `Guess a number between ${minNum} and ${maxNum}: You have ${attemptNo} attempt(s) left`
     console.log(attemptNo);

      // function that checks if the user entered a number
      if (isNaN(userGuess)) {
          // alert('Please enter a valid number');
          outputPara.textContent = "Please enter a valid number";
        //  console.log(attemptNo)
         return;

      }
      attemptNo--;
      attemptsSpan.textContent = `Guess a number between ${minNum} and ${maxNum}: You have ${attemptNo} attempt(s) left`
    console.log(attemptNo)

      if (userGuess === secretNumber) {
        console.log(attemptNo)

          let randCongratzMsg = arrayCongratSet[Math.floor(Math.random() * arrayCongratSet.length)];

          attemptsSpan.textContent = `You have ${attemptNo} attempt(s) left`;

          // alert(`${randCongratzMsg}, Congrats! You guessed the number ${secretNumber} with ${attemptNo} attempt(s) to spare`);
          outputPara.textContent = `${randCongratzMsg}, Congrats! You guessed the number ${secretNumber} with ${attemptNo} attempt(s) to spare`
          console.log(attemptNo)
          inputField.disabled = true;
          enterButton.disabled = true;
      } else if (attemptNo > 0) {
        console.log(attemptNo)
        const message = userGuess < secretNumber ? 'Too Low, Try again' : 'Too High, Try again';
    outputPara.textContent = message;
    console.log(attemptNo)
    return;
      } else {
        console.log(attemptNo)
          const randQuirkMsg = arrayQuirkySet[Math.floor(Math.random() * arrayQuirkySet.length)];

          attemptsSpan.textContent = `You have ${attemptNo} attempt(s) left ${randQuirkMsg}, The number is ${secretNumber}`;

          //alert(`${randQuirkMsg}`);
        //alert(`The number is ${secretNumber}`)
        // alert(`${randQuirkMsg}, The number is ${secretNumber}`);
        inputField.disabled = true;
        enterButton.disabled = true;
  }
}
generateSecretNumber()
guessNumber();

const playAgainButton = document.querySelector('.playAgain');

function playAgain() {
  const playAgain = document.querySelector('.playAgain');
  attemptNo = 3;
  secretNumber = null;
  inputField.disabled = false;
  enterButton.disabled = false;
  outputPara.textContent = "";
  attemptsSpan.textContent = `You have ${attemptNo} attempt(s) left`;
  generateSecretNumber();
}

generateSecretNumber();
enterButton.addEventListener('click', guessNumber);
playAgainButton.addEventListener('click', playAgain);