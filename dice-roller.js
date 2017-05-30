var howManyRolls = process.argv[2];


function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollingDice(numberOfRolling){
  var output = [];
  for (var i = 0; i< numberOfRolling; i++ ){
    output.push(" " + getRandomIntInclusive(1, 6));
  }
  return output;
}


console.log("Rolled " + howManyRolls + " dice: " + rollingDice(howManyRolls));
