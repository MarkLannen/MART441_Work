console.log("My 3 favorite restaurants are: 5 on Black, Caffe Dolce and Masala.")
console.log("My 3 favorite snackfoods are: avacado on toast, popcorn and cheese on toast.")
console.log("My 3 favorite fruits/vegatables are: huckleberries, kale and grapes.")

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}

else if (season === 'winter') {
   console.log('It\'s winter! Everything is covered in snow.');

} else {
  console.log('Invalid season.');
}

function getChoice1 () {
  var userChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("story");

  console.log(userChoice);

  if(userChoice === 'Swan') {
    myQuestion.innerHTML = "Excellent Choice!"

  }
  else if(userChoice === 'Benchmark') 
  {
    myQuestion.innerHTML = "A brave decision.."

  }
  else
  {
    myQuestion.innerHTML = "Please look a bit more closely at the options!"
  }
}