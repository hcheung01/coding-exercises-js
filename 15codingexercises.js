GUESS THE NUMBER

var generate = (Math.floor(Math.random() * 100 + 1));
console.log(generate);
var userInput = prompt("Please guess number from 1 to 100");

function game() {
  if (userInput < generate) {
    console.log("Too Low");
  } else if (userInput > generate) {
    console.log("Too High")
  } else {
    console.log("You got it!")
  }
}
game();

LAIROTCAF

function factorialize(num) {

  for(var answer=1;num>0;num--){
   var money = answer*=num;
  }

  return answer;
}
var input = prompt("input number");
var endResult = input;
endResult = factorialize(input);


console.log(endResult + " = " + input + "!");

SCRAB-BAG

var word = prompt("Enter a word please");
word = word.toUpperCase();

var alphabet = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10

}

var letter, i, sum = 0;
for (i = 0; i < word.length; i++) {
    letter = word[i];
    sum += alphabet[letter];
}
alert("Total Points: " + sum + " Letters Used: " +word);


STRING INDICES(incomplete)

var blank = " ";

var test = prompt();
var split = test.split(/\s*\b\s*/);
console.log(split);

var index = prompt("Index #");

if (index > split.length) {
  console.log(" ")
} else {
  console.log(split[index]);
}


THE DISEMVOWLING

function removeVowels(strg) {
	vowels=/[aeiou ]/gi;
	replaceWith=""
		return strg.replace(vowels,replaceWith);
}
var userInput = prompt("Enter something below...");
var userInputNoVowels = removeVowels(userInput);
console.log(userInputNoVowels)

PARENS-B-GONE

HTML

<p>Remove ()</p>
<input id="input1" type="text" value="(123) 1234-1234">
<input id="run1" type="button" value="run">
<span id="output1"></span>

<hr>

<p>Remove ()[]{}</p>
<input id="input2" type="text" value="Hello (this) is [] a {{test}}!">
<input id="run2" type="button" value="run">
<span id="output2"></span>

JAVASCRIPT

run1.onclick = function() {
  //removes "(" and ")"
  output1.innerHTML = input1.value.replace(/[()]/g, '');
}

run2.onclick = function() {
  //removes (){}[]
  output2.innerHTML = input2.value.replace(/[\])}[{()]/g, '');
}

//   output2.innerHTML = input2.value.replace(/[\])}[{(]/g, '');

WHO WANTS A DATE

var year = prompt("Please enter year from 1950 - 2049");
var month = prompt("Please enter month");
var day = prompt("Please enter day");

alert(year + "-" + month.toUpperCase() + "-" + day);

PLAY IT AGAIN, JAVASCRIPT!

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();


var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.type = 'sine';
oscillator.frequency.value = 700;
oscillator.start();
oscillator.stop(2);

var oscillator2 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator2.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator2.type = 'sine';
oscillator2.frequency.value = 800;
oscillator2.start(2);
oscillator2.stop(4);

var oscillator3 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator3.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator3.type = 'sine';
oscillator3.frequency.value = 900;
oscillator3.start(4);
oscillator3.stop(6);

var oscillator4 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator4.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator4.type = 'sine';
oscillator4.frequency.value = 950;
oscillator4.start(6);
oscillator4.stop(8);

var oscillator5 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator5.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator5.type = 'sine';
oscillator5.frequency.value = 1100;
oscillator5.start(8);
oscillator5.stop(10);

var oscillator6 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator6.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator6.type = 'sine';
oscillator6.frequency.value =1250;
oscillator6.start(10);
oscillator6.stop(12);

var oscillator7 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator7.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator7.type = 'sine';
oscillator7.frequency.value =1400;
oscillator7.start(12);
oscillator7.stop(14);

var oscillator8 = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator8.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator8.type = 'sine';
oscillator8.frequency.value =1480;
oscillator8.start(14);
oscillator8.stop(16);
