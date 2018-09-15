'use strict';

var userName = prompt ('Welcome to my site, what\'s your name?');
console.log('What is your name? : ' + userName);

//coding question

var codingQuestion = function(){

  var coding = prompt ('Does Nicole like coding?');
  coding = coding.toLowerCase();

  if (coding === 'yes' || coding === 'y'){
    alert ('Great job, ' + userName + ' of course I love coding!');
  } else if(coding === 'no' || coding === 'n'){
    alert( 'Oh No! Of course I love coding!');
  } else {
    alert('Please respond using yes or no or y or n.');
  }
  console.log('Does Nicole like coding? : ' + coding);
};

// anime question

var animeQuestion = function(){

  var anime = prompt ('Does Nicole like anime?');
  anime = anime.toLowerCase();

  if (anime === 'yes' || anime === 'y'){
    alert ('Great job, ' + userName + ' anime is great right?!');
  } else if(anime === 'no' || anime === 'n'){
    alert( 'Oh No! Of course I love anime!');
  } else {
    alert('Please respond using yes or no or y or n.');
  }

  console.log('Does Nicole like anime? : ' + anime);
};

//country music

var countryMusicQuestion = function(){

  var countryMusic = prompt ('Does Nicole like country music?');
  countryMusic = countryMusic.toLowerCase();

  if (countryMusic === 'no' || countryMusic === 'n'){
    alert ('Great job, ' + userName + ' I really don\'t like country music');
  } else if(countryMusic === 'yes' || countryMusic === 'y'){
    alert( 'Oh No! I\'m really not a fan of country music.');
  } else {
    alert('Please respond using yes or no or y or n.');
  }

  console.log('Does Nicole like country music? : ' + countryMusic);
};

//single question

var singleQuestion = function(){

  var single = prompt ('Is Nicole single?');
  single = single.toLowerCase();

  if (single === 'yes' || single === 'y'){
    alert ('That\'s right, ' + userName + ' I am single.');
  } else if(single === 'no' || single === 'n'){
    alert( 'Oh No! I\'m actually single.');
  } else {
    alert('Please respond using yes or no or y or n.');
  }

  console.log('Is Nicole single? : ' + single);
};

//turtles!

var turtleQuestion = function(){

  var turtle = prompt ('Does Nicole like turtles?');
  turtle = turtle.toLowerCase();

  if (turtle === 'yes' || turtle === 'y'){
    alert ('That\'s right, ' + userName + ' I LOVE turtles!');
  } else if(turtle === 'no' || turtle === 'n'){
    alert( 'Oh No! I LOVE turtles!');
  } else {
    alert('Please respond using yes or no or y or n.');
  }

  console.log('Does Nicole like turtles? : ' + turtle);
};

//number question

var stepsQuestion = function(){

  alert('Now ' + userName + ', for this next question, please answer using a number:');

  var attempts = 4;

  while (attempts > 0 ){
    var steps = prompt('At least how many steps did I take today?');
    if (steps >= 10000){
      attempts = 0;
      console.log('SUCCESS<<<<', steps, attempts);
      alert ('That\'s right, that\'s exactly how many steps I took today');
      break;
    } else if( steps <= 500){
      alert ('Nope, that\'s waayy too low, try again ' + userName);
    } else if (500 < steps < 9999){
      alert ('Too low, try again?');
    } else if (steps < 0){
      alert( 'I didn\'t know I could return steps! How is that possible? Nevermind, don\'t answer that.');
    } else if(typeof steps !== 'number'){
      alert('it has to be a number!!!');
      console.log('fail<<<<', steps, attempts);
    }
    attempts--;

  }
  console.log('How many steps did I take today? : ' + steps);
};

//multiple choice question

var hairQuestion = function(){

  var hairColors = ['blonde', 'black', 'blue', 'ginger', 'red', 'purple', 'green', 'silver', 'brown'];

  var tries = 6;

  while (tries > 0 ){
    var hair = prompt('What is one of the different colors that I\'ve dyed my hair?');
    hair = hair.toLowerCase();
    if (hairColors.includes(hair)){
      tries = 0;
      console.log('SUCCESS<<<<', hair, tries);
      alert ('Corect response! Good job!');
      break;
    } else{
      alert ('Nope, maybe I should try that next. Try again.');
      console.log('fail<<<<', hair, tries);
    }
    tries--;
  }
  console.log('What is one of the colors I\'ve dyed my hair? : ' + hair);
};

// calling the functions
codingQuestion();
animeQuestion();
countryMusicQuestion();
singleQuestion();
turtleQuestion();
stepsQuestion();
hairQuestion();
