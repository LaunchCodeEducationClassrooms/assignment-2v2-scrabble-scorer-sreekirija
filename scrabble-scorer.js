// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
		 }
 
	  }
	}
	return letterPoints;
 }

function simpleScoreAlgorithm(word) {
	let letterPoints = 0;
 	for (i = 0; i < word.length; i++) {
    letterPoints += 1;
	}
	return letterPoints;
 }

function vowelBonusScoreAlgorithm(word) {
  let vowels=['a','e','i','o','u'];
  let letterPoints=0;
  word = word.toLowerCase();
  	for (i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      letterPoints+=3;
    } else{
       letterPoints+=1;
    }
    }
  return letterPoints;
}

function scrabbleScorer(word){
  	word = word.toLowerCase();
	letterPoints = 0;
  let c=0;
	for (i = 0; i < word.length; i++) {
   
    c+=(newPointStructure[word[i]]);
 //console.log(typeof c);
	  
 
 
	  }
return c;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!\n");
   return (input.question('Enter a word to score: '));
  
};

let simpleScore = {
  'name' : 'Simple',
  'description' : 'One point per character',
  'scorerFunction' : simpleScoreAlgorithm
};

let vowelBonusScore={
  'name' : 'Vowel Bonus',
  'description' : 'Vowels are worth 3 points',
  'scorerFunction' : vowelBonusScoreAlgorithm
};

let scrabbleScore={
  'name' : 'Scrabble',
  'description' : 'Uses scrabble point system',
  'scorerFunction' : scrabbleScorer
};

const scoringAlgorithms = [simpleScore,vowelBonusScore,scrabbleScore];


function scorerPrompt() {
  console.log('Which scoring algorithm would you like to use?\n');
  for(i=0;i<scoringAlgorithms.length;i++){
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
  }
  let selectedScoring=input.question("Enter 0, 1, or 2: ");
  while(!(selectedScoring==0 || selectedScoring==1 || selectedScoring==2)){
    console.log("Please enter only 0, 1 or 2");
    selectedScoring=input.question("Enter 0, 1, or 2: ");
  }
  return selectedScoring;    
}


let newPointStructure={};
newPointStructure=transform(oldPointStructure);

function transform(oldArray) {
  let newPointStruct={};
  for(item in oldArray){
    for(let j=0;j<oldArray[item].length;j++){
    newPointStruct[(oldPointStructure[item][j]).toLowerCase()]=Number(item);   
    } 
  }

newPointStruct[' ']=0;

return newPointStruct;

}


function runProgram() {
  let word=initialPrompt();
  
  let scoringOption=scorerPrompt();
  
  console.log(`Score for '${word}': ${scoringAlgorithms[scoringOption].scorerFunction(word)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};