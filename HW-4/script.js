

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
    document.getElementById("choice-image").src="img/food-500px.jpg";
    myQuestion.innerHTML = "Light up the stove and break out the dehydrated meal! After you have eaten, finally started and walked for a few miles, you see a large woodpecker perched on a near by tree. Do you keep on walking or break out the binoculars and try to identify it?"
    document.getElementById("choice3").style.display="none";
    document.getElementById("btnSubmit3").style.display="none"; 

    document.getElementById("choice4").style.display="block";
    document.getElementById("btnSubmit4").style.display="block"; 
  }

  else if(stay_go_choice ==='walk')
  {
    document.getElementById("choice-image").src="img/hiking-500px.jpg";
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

function getChoice4 () {
  var stay_go_choice = document.getElementById("choice4").value;
  var myQuestion = document.getElementById("story");

  if (stay_go_choice === 'ignore')
  {
    document.getElementById("choice-image").src="img/hiking2-500px.jpg";
    myQuestion.innerHTML = "After a long day of hiking, you have finally arrived at a campsite. Are you going to get an early night, or do you want to stay up late and look at the stars?"
    document.getElementById("choice4").style.display="none";
    document.getElementById("btnSubmit4").style.display="none"; 

    document.getElementById("choice5").style.display="block";
    document.getElementById("btnSubmit5").style.display="block"; 
  }

  else if(stay_go_choice ==='binoculars')
  {
    document.getElementById("choice-image").src="img/woodpecker-500px.jpg";
    myQuestion.innerHTML = "After a long day of hiking, you have finally arrived at a campsite. Are you going to get an early night, or do you want to stay up late and look at the stars?" 
    document.getElementById("choice4").style.display="none";
    document.getElementById("btnSubmit4").style.display="none"; 

    document.getElementById("choice5").style.display="block";
    document.getElementById("btnSubmit5").style.display="block"; 
  }

  else
  {
    myQuestion.innerHTML === "Please look a bit more closely at the options!"
  }
}

function getChoice5 () {
  var stay_go_choice = document.getElementById("choice5").value;
  var myQuestion = document.getElementById("story");

  if (stay_go_choice === 'sleep')
  {
    document.getElementById("choice-image").src="img/sleep-500px.jpg";
    myQuestion.innerHTML = "Congratulations - you've survived your first day! Are you going home, or do you want to carry on with the adventure?"
    document.getElementById("choice5").style.display="none";
    document.getElementById("btnSubmit5").style.display="none"; 

    document.getElementById("choice6").style.display="block";
    document.getElementById("btnSubmit6").style.display="block"; 
  }

  else if(stay_go_choice ==='stars')
  {
    document.getElementById("choice-image").src="img/stars-500px.jpg";
    myQuestion.innerHTML = "Congratulations - you've survived your first day! Are you going home, or do you want to carry on with the adventure?" 
    document.getElementById("choice5").style.display="none";
    document.getElementById("btnSubmit5").style.display="none"; 

    document.getElementById("choice6").style.display="block";
    document.getElementById("btnSubmit6").style.display="block"; 
  }

  else
  {
    myQuestion.innerHTML === "Please look a bit more closely at the options!"
  }
}

function getChoice6 () {
  var stay_go_choice = document.getElementById("choice6").value;
  var myQuestion = document.getElementById("story");

  if (stay_go_choice === 'return')
  {
    document.getElementById("choice-image").src="img/car-500px.jpg";
    myQuestion.innerHTML = "Safe travels home!"
    document.getElementById("choice6").style.display="none";
    document.getElementById("btnSubmit6").style.display="none"; 

    document.getElementById("choice7").style.display="block";
    document.getElementById("btnSubmit7").style.display="block"; 
  }

  else if(stay_go_choice ==='stars')
  {
    document.getElementById("choice-image").src="img/continue-500px.jpg";
    myQuestion.innerHTML = "Good for you!" 
    document.getElementById("choice6").style.display="none";
    document.getElementById("btnSubmit6").style.display="none"; 

    document.getElementById("choice7").style.display="block";
    document.getElementById("btnSubmit7").style.display="block"; 
  }

  else
  {
    myQuestion.innerHTML === "Please look a bit more closely at the options!"
  }
}


