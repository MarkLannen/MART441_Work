

function getChoice1 () {
  var userChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("story");

  console.log(userChoice);

  if(userChoice === 'river') {
    myQuestion.innerHTML = "Excellent Choice! You'll find a beautiful spot about 8 miles away. You've got all day to get there, so make sure you stop and take some pictures along the way."
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none"; 

    document.getElementById("choice2").style.display="block";
    document.getElementById("btnSubmit2").style.display="block"; 
  }
  else if(userChoice === 'lake') 
  {
    myQuestion.innerHTML = "A brave decision... you're in for a long day - check and make sure you have enough food before you start walking!"
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none"; 

    document.getElementById("choice2").style.display="block";
    document.getElementById("btnSubmit2").style.display="block"; 
  }
  else
  {
    myQuestion.innerHTML = "Please look a bit more closely at the options!"
  }
}

// function getChoice2 () {
//   var camp_choice = document.getElementById("choice2").value;

//   if (camp_choice === 'river') {
//     myQuestion.innerHTML = 
//   }

