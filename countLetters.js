function countLetters(string){
  var output = {};
  string.split('').forEach(function(letter) {
    if (letter !== ' '){
      if (output[letter]){
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  });


  return output;
}


// (2 + 2) * 3

console.log(countLetters("lighthouse in the house"));

// console.log(countLetters(["dog", "cat", "house", "rat"]));
