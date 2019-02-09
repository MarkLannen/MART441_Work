

function getChoice1 () {
  var userChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("story");

  if(userChoice === 'river') 
  {
    document.getElementById("choice-image").src="img/river-500px.jpg";
    myQuestion.innerHTML = "Excellent Choice! You'll find a beautiful spot about 8 miles away. You've got all day to get there, so make sure you stop and take some pictures along the way. Now, who do you want to take the lead your or your friend?"
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none"; 

    document.getElementById("choice2").style.display="block";
    document.getElementById("btnSubmit2").style.display="block"; 
  }
  else if(userChoice === 'lake') 
  {
    document.getElementById("choice-image").src="img/lake-500px.jpg";
    myQuestion.innerHTML = "A brave decision... you're in for a long day - check and make sure you have enough food before you start walking! Now, who do you want to take the lead your or your friend?"
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

function getChoice2 () {
  var leader_choice = document.getElementById("choice2").value;
  var myQuestion = document.getElementById("story");

  if (leader_choice = 'you')
  {
    myQuestion.innerHTML = "Make noise and keep an eye out for bears!"
    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none"; 

    document.getElementById("choice3").style.display="block";
    document.getElementById("btnSubmit3").style.display="block"; 
  }

  if (leader_choice = 'friend')
  {
    myQuestion.innerHTML = "Remind your friend to make noise and keep an eye out for bears!" 
    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none"; 

    document.getElementById("choice3").style.display="block";
    document.getElementById("btnSubmit3").style.display="block"; 
  }
}
