// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, index, array){
    if (element === "Waldo") {
      found(element, index);
    }
  })
     // execute callback
}

function actionWhenFound(name, index) {
  console.log("find " + name + " at " + "index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

