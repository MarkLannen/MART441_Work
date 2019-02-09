

function getChoice1 () {
  var userChoice = document.getElementById("choice").value;
  var myQuestion = document.getElementById("story");

  if(userChoice === 'river') 
  {
    document.getElementById("choice-image").src="img/river-500px.jpg";
    myQuestion.innerHTML = "Excellent Choice! You'll find a beautiful spot about 8 miles away. You've got all day to get there, so make sure you stop and take some pictures along the way. Now, who do you want to take the lead, or shoud you let your friend go first?"
    document.getElementById("choice").style.display="none";
    document.getElementById("btnSubmit").style.display="none"; 

    document.getElementById("choice2").style.display="block";
    document.getElementById("btnSubmit2").style.display="block"; 
  }
  else if(userChoice === 'lake') 
  {
    document.getElementById("choice-image").src="img/lake-500px.jpg";
    myQuestion.innerHTML = "A brave decision... you're in for a long day - check and make sure you have enough food before you start walking! Now, who do you want to take the lead, or shoud you let your friend go first?"
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

  if (leader_choice === 'you')
  {
    document.getElementById("choice-image").src="img/bear-500px.jpg";
    myQuestion.innerHTML = "Make noise and keep an eye out for bears! Now, do you want to eat before you start hiking?"
    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none"; 

    document.getElementById("choice3").style.display="block";
    document.getElementById("btnSubmit3").style.display="block"; 
  }

  else if(leader_choice ==='friend')
  {
    document.getElementById("choice-image").src="img/bear-500px.jpg";
    myQuestion.innerHTML = "Remind your friend to make noise and keep an eye out for bears! Now, do you want to eat before you start hiking?" 
    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none"; 

    document.getElementById("choice3").style.display="block";
    document.getElementById("btnSubmit3").style.display="block"; 
  }

  else
  {
    myQuestion.innerHTML === "Please look a bit more closely at the options!"
  }
}

function getChoice3 () {
  var stay_go_choice = document.getElementById("choice3").value;
  var myQuestion = document.getElementById("story");

  if (stay_go_choice === 'eat')
  {
    document.getElementById("choice-image").src="img/woodpecker-500px.jpg";
    myQuestion.innerHTML = "Light up the stove and break out the dehydrated meal! After you have eaten, finally started and walked for a few miles, you see a large woodpecker perched on a near by tree. Do you keep on walking or break out the binoculars and try to identify it?"
    document.getElementById("choice3").style.display="none";
    document.getElementById("btnSubmit3").style.display="none"; 

    document.getElementById("choice4").style.display="block";
    document.getElementById("btnSubmit4").style.display="block"; 
  }

  else if(stay_go_choice ==='walk')
  {
    document.getElementById("choice-image").src="img/woodpecker-500px.jpg";
    myQuestion.innerHTML = "Lace up your boots, adjust your pack and start walking!After you have walked for a few miles, you see a large woodpecker perched on a near by tree. Do you keep on walking or break out the binoculars and try to identify it?" 
    document.getElementById("choice3").style.display="none";
    document.getElementById("btnSubmit3").style.display="none"; 

    document.getElementById("choice4").style.display="block";
    document.getElementById("btnSubmit4").style.display="block"; 
  }

  else
  {
    myQuestion.innerHTML === "Please look a bit more closely at the options!"
  }
}


