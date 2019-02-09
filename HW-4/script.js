

function getChoice1 () {
  var userChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("story");

  console.log(userChoice);

  if(userChoice === 'river') {
    myQuestion.innerHTML = "Excellent Choice! You'll find a beautiful spot about 8 miles away. You've got all day to get there, so do you want to start walking now or eat some food first?"
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none"; 

    document.getElementById("choice2").style.display="block";
    document.getElementById("btnSubmit2").style.display="block"; 
  }
  else if(userChoice === 'lake') 
  {
    myQuestion.innerHTML = "A brave decision... you're in for a long day - check and make sure you have enough food and start walking! Who's going to take the lead? You or your friend?"
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none"; 

    document.getElementById("choice3").style.display="block";
    document.getElementById("btnSubmit3").style.display="block"; 
  }
  else
  {
    myQuestion.innerHTML = "Please look a bit more closely at the options!"
  }
}

function getChoice2 () {
  // var camp_choice = document.getElementById("choice2").value;

}