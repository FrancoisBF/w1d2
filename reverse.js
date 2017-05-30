function reverseString(string){
  var output = "";
  for (var x = string.length-1; x >= 0; x--){
    output += string[x];
  }
  return output;
}

var input = process.argv;

for(var y = 2; y < input.length; y++){
  console.log(reverseString(input[y]));
}







