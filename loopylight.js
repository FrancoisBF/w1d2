for (var numbers = 100; numbers <= 200; numbers++) {
  if (numbers % 3 === 0 && numbers % 4 === 0){
    console.log("LoopyLighthouse");
  }
    if(numbers % 3 === 0){
    console.log("Loopy");
  }
    if(numbers % 4 === 0){
      console.log("Lighthouse");
    }
    else{
      console.log(numbers);
    }
}
