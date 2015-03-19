window.onload = function() {
    document.getElementById("start").addEventListener("click", startGame);
    document.getElementById('gameView').style.display = 'none';   
    document.getElementById('questionBox').style.display = 'none';   
}
var qnumber = 1;
var number=0;
var score=0;
var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

var capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"];    
function play() {
    if(qnumber <= 50){
        number = Math.floor(Math.random() * (51 - qnumber));
        showQuestion(states[number]);
        console.log(states);

        console.log(states);
        console.log(capitals);
        console.log(qnumber);
        qnumber++;
    }   
    
}

function go() {
        if(document.getElementById('ans').value == ""){
            alert("The answer is: " + capitals[number]);   
        }else if(document.getElementById('ans').value == capitals[number]){
            alert("your answer is correct");
            score++;
        }else{
            alert("Sorry the right answer is: " + capitals[number]);          
        }
        states.splice(number, 1);
        capitals.splice(number, 1);
        play();
        document.getElementById('mscore').innerHTML = "Score: " + score;
        document.getElementById('ans').value = "";   
}

function startGame() {
    hideElements();
    document.getElementById('mscore').innerHTML = "Score: " + score;
    document.getElementById("button").addEventListener("click", function() {
        if(document.getElementById('ans').value == ""){
            alert("The answer is: " + capitals[number]);   
        }else if(document.getElementById('ans').value == capitals[number]){
            alert("your answer is correct");
            score++;
        }else{
            alert("Sorry the right answer is: " + capitals[number]);          
        }
        states.splice(number, 1);
        capitals.splice(number, 1);
        play();
        document.getElementById('mscore').innerHTML = "Score: " + score;
        document.getElementById('ans').value = "";


    });
    play();
} 
function hideElements() {
    document.getElementById('startView').style.display = 'none';   
    document.getElementById('gameView').style.display = 'block';   
    document.getElementById('questionBox').style.display = 'block';  
}


function showScore() {
    document.getElementById("ans").style.display = 'none';
    document.getElementById('mscore').innerHTML = "Your Score: " + score;
    document.getElementById('title').innerHTML = "High Scores";
    
    var highscores = JSON.parse(localStorage["highscores"]);
    var newScores = [0,0,0,0,0];
    var temp = 0;
    if(score > highscores[0]){
        newScores[0] = score;
        newScores[1] = highscores[0];
        newScores[2] = highscores[1];
        newScores[3] = highscores[2];
        newScores[4] = highscores[3];
    }else if(score > highscores[1]) {
        newScores[0] = highscores[0];
        newScores[1] = score;
        newScores[2] = highscores[1];
        newScores[3] = highscores[2];
        newScores[4] = highscores[3];
             
    }else if(score > highscores[2]) {
        newScores[0] = highscores[0];
        newScores[1] = highscores[1];
        newScores[2] = score;
        newScores[3] = highscores[2];
        newScores[4] = highscores[3];
             
    }else if(score > highscores[3]) {
        newScores[0] = highscores[0];
        newScores[1] = highscores[1];
        newScores[2] = highscores[2];
        newScores[3] = score;
        newScores[4] = highscores[3];
    }else if(score > highscores[4]) {
        newScores[0] = highscores[0];
        newScores[1] = highscores[1];
        newScores[2] = highscores[2];
        newScores[3] = highscores[3];
        newScores[4] = score; 
    }else{
             
    }
    
    document.getElementById('dummy').innerHTML = newScores[4];   
    document.getElementById('answer1').innerHTML = newScores[0];   
    document.getElementById('answer2').innerHTML = newScores[1];   
    document.getElementById('answer3').innerHTML = newScores[2];    
    document.getElementById('answer4').innerHTML = newScores[3]; 
    localStorage.setItem("highscores",JSON.stringify(newScores));

    
}
function showQuestion(q) {
    document.getElementById('title').innerHTML = "Question " + qnumber + ": " + "What is the Capitol of " + q;   
    
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


  


