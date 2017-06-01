var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];

students.sort(function(a, b) {
  var nameA = a.name;
  var nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  //if name === name// sort by age
  if (nameA === nameB){
    var ageA = a.age;
    var ageB = b.age;
    if (ageA < ageB) {
      return -1;
    }
    if (ageA > ageB) {
      return 1;
      }
    }
    return 0;
});
console.log(students)


// first by the name ascending alphabetically//done
// and in cases where the names are equal sort by descending age