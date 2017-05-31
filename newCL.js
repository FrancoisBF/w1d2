function countLetters(string){
  var output = {};
  string.split('').forEach(function(letter, index) {
    if (letter !== ' '){
      if (output[letter]){
        output[letter].push(index);
      } else {
        output[letter] =[index];
      }
    }
  });


  return output;
}



console.log(countLetters("lighthouse in the house"));





