// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo', 'bar'], (str) => str + str));
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 is highorder function where as counter 2 references nothing.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 1 utlizes closure
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *Counter 1 is useful for better coding habits and doesnt utilize global variables, Counter 2 is a more mutable information and shows it plainly also using global variables.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){
  min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(inning(0, 2));
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb,inni){
  let home = 0;
  let away = 0;
  for (let i = 1; i < inni; i++){
    home += cb(0,2);
    away += cb(0,2);
  }
  console.log(`Home: ${home}, Away: ${away}`);
}
finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */



function getInningScore(cb1, i){
  let team = [];
  for (let b = 1; b <= i; b++){
    team.push (cb1(0,2));
  }
  return(team);
}

function scoreboard(){
  let home = getInningScore(inning,9);
  let away = getInningScore(inning,9);
  let homeTotal = home.reduce(function(a,b){return a+b});
  let awayTotal = away.reduce(function(a,b){return a+b});



console.log(`1st Inning - Away: ${away[0]} Home: ${home[0]}`);
console.log(`2nd Inning - Away: ${away[1]} Home: ${home[1]}`);
console.log(`3rd Inning - Away: ${away[2]} Home: ${home[2]}`);
console.log(`4th Inning - Away: ${away[3]} Home: ${home[3]}`);
console.log(`5th Inning - Away: ${away[4]} Home: ${home[4]}`);
console.log(`6th Inning - Away: ${away[5]} Home: ${home[5]}`);
console.log(`7th Inning - Away: ${away[6]} Home: ${home[6]}`);
console.log(`8th Inning - Away: ${away[7]} Home: ${home[7]}`);
console.log(`9th Inning - Away: ${away[8]} Home: ${home[8]}`);
console.log(`Final Score - Away: ${awayTotal} Home: ${homeTotal}`);
}
scoreboard();