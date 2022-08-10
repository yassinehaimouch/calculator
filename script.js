
// -------- Variables -------- //

const screen = document.getElementById('screen');
const result = document.querySelector('.result');
var numChar, currentChar, previousChar;
var operations = ['+', '/' ,'*', '%', '-'];


// -------- Functions -------- //

function display(c){
  screen.value += c;
  numChar = screen.value.length;
  currentChar = c;
  getPreviousChar()
}

function clearScreen(){
  screen.value = "";
  result.innerText = 0;
}

function calculate(){
  result.innerText = eval(screen.value);
}

function getPreviousChar(){
  previousChar = screen.value.substring(numChar - 2, numChar -1);
  checkSyntax()
}


function checkSyntax(){
  if(operations.includes(previousChar) && operations.includes(currentChar))
    screen.value = screen.value.substring(0, numChar-2) + currentChar;
}

function removeChar(){
  screen.value = screen.value.substring(0, numChar-1);
}

function deleteChar(){
  screen.value = screen.value.substring(0, numChar-1);
  numChar = screen.value.length;
  
};
