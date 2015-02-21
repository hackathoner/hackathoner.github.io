window.onload = function() {
    document.getElementById("start").addEventListener("click", startGame);
    document.getElementById('gameView').style.display = 'none';   
    document.getElementById('questionBox').style.display = 'none';   

}
if(!localStorage.getItem("highscores")){
        var highscores = [0,0,0,0,0];
        localStorage.setItem("highscores",JSON.stringify(highscores));
}
var qnumber = 49;
var score = 0;
var mynum = 5;
var intervaled;
var itwo;
var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"];    
function startGame() {
    hideElements();
    playGame();
} 
function hideElements() {
    document.getElementById('startView').style.display = 'none';   
    document.getElementById('gameView').style.display = 'block';   
    document.getElementById('questionBox').style.display = 'block';  
    countDown();
}
function countDown() {
    showQuestion(qnumber);
    intervaled = setInterval(function(){showQuestion(qnumber)},5000);
}
function playGame() {
    
}
function showScore() {
    document.getElementsByName("answer")[0].style.display = 'none';
    document.getElementsByName("answer")[2].style.display = 'none';
    document.getElementsByName("answer")[3].style.display = 'none';
    document.getElementsByName("answer")[1].style.display = 'none';
//    document.getElementById('mscore').style.display = 'none';   
//    document.getElementById('answer1').style.display = 'none';   
//    document.getElementById('answer2').style.display = 'none';   
//    document.getElementById('answer3').style.display = 'none';   
//    document.getElementById('answer4').style.display = 'none';   

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
    console.log(score);
    itwo =  setInterval(function(){
        mynum--;
        console.log("something is happneing");  
//        document.getElementById('time').innerHTML = (mynum );
        if(mynum <= 0){
            clearInterval(itwo);
            mynum = 5;
        }
    
    },1000);
    document.getElementById('mscore').innerHTML = "Score: " + score;
    document.getElementsByName("answer")[0].checked = false;
    document.getElementsByName("answer")[2].checked = false;
    document.getElementsByName("answer")[3].checked = false;
    document.getElementsByName("answer")[1].checked = false;
    var qNumber = Math.floor((Math.random() * 50));
    var fakeNumber1 = Math.floor((Math.random() * 50));
    var fakeNumber2 = Math.floor((Math.random() * 50)); 
    var fakeNumber3 = Math.floor((Math.random() * 50));
    
    if(fakeNumber1 == qNumber || fakeNumber1 == fakeNumber2 || fakeNumber1 == fakeNumber3){
        fakeNumber1++;
    }
    if(fakeNumber2 == qNumber || fakeNumber2 == fakeNumber3){
        fakeNumber2++;
    }
    if(fakeNumber3 == qNumber){
        fakeNumber3++;
    }
    var numbersArray = [qNumber,fakeNumber1,fakeNumber2,fakeNumber3];
    console.log("preshuffle" + numbersArray);
    shuffle(numbersArray);
    console.log("postshuffle" + numbersArray);
    var title = "Question " + q + ": What is the capital of " + states[qNumber];
    var answer = capitals[qNumber];
    document.getElementById('title').innerHTML = title; 
    document.getElementById('answer1').innerHTML = capitals[numbersArray[0]]; 
    document.getElementById('answer2').innerHTML = capitals[numbersArray[1]]; 
    document.getElementById('answer3').innerHTML = capitals[numbersArray[2]]; 
    document.getElementById('answer4').innerHTML = capitals[numbersArray[3]]; 
    document.getElementsByName("answer")[0].value = numbersArray[0] ;
    document.getElementsByName("answer")[1].value = numbersArray[1] ;
    document.getElementsByName("answer")[2].value = numbersArray[2] ;
    document.getElementsByName("answer")[3].value = numbersArray[3] ;
    console.log(q);
//    document.getElementById('submit').addEventListener("click",function() {
//        if(document.getElementsByName("answer")[0].checked) {
//            var a = document.getElementsByName("answer")[0].value;
//            if(a == qNumber) {
//                score++;
//                clearInterval(intervaled);
//                clearInterval(itwo);
//                mynum = 5;
//                countDown();
//            }
//        }
//        if(document.getElementsByName("answer")[1].checked) {
//            var a = document.getElementsByName("answer")[1].value;
//            if(a == qNumber) {
//                score++;
//                clearInterval(intervaled);
//                clearInterval(itwo);
//                countDown();
//            }
//        }
//        if(document.getElementsByName("answer")[2].checked) {
//            var a = document.getElementsByName("answer")[2].value;
//            if(a == qNumber) {
//                score++;
//                clearInterval(intervaled);
//                clearInterval(itwo);
//                mynum = 5;
//                countDown();
//            }
//        }
//        if(document.getElementsByName("answer")[3].checked) {
//            var a = document.getElementsByName("answer")[3].value;
//            if(a == qNumber) {
//                score++;
//                clearInterval(intervaled);
//                clearInterval(itwo);
//                mynum = 5;
//                countDown();
//            }
//        }
//        
//    });
    var a = document.getElementsByName("answer")[2].addEventListener("click",function() {
        if(document.getElementsByName("answer")[0].checked) {
            var a = document.getElementsByName("answer")[0].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        if(document.getElementsByName("answer")[1].checked) {
            var a = document.getElementsByName("answer")[1].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        if(document.getElementsByName("answer")[2].checked) {
            var a = document.getElementsByName("answer")[2].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        if(document.getElementsByName("answer")[3].checked) {
            var a = document.getElementsByName("answer")[3].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        
    });
    var mynodes = document.getElementsByName("answer");
    for(var x = 0; x < mynodes.length; x++)
    {
        var a = document.getElementsByName("answer")[x].addEventListener("click",function() {
        if(document.getElementsByName("answer")[0].checked) {
            var a = document.getElementsByName("answer")[0].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();

            }
        }
        else if(document.getElementsByName("answer")[1].checked) {
            var a = document.getElementsByName("answer")[1].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        else if(document.getElementsByName("answer")[2].checked) {
            var a = document.getElementsByName("answer")[2].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);                
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        else if(document.getElementsByName("answer")[3].checked) {
            var a = document.getElementsByName("answer")[3].value;
            if(a == qNumber) {
                score++;
                clearInterval(intervaled);
                clearInterval(itwo);
                mynum = 5;
                countDown();
            }
        }
        
    });;
    }
    qnumber++;
    if(q>50){
        clearInterval(intervaled);  
        clearInterval(itwo);
        showScore();
    }
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


  


