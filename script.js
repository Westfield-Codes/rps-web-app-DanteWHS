var round = 1;
var rounds = localStorage.setItem("rounds", rounds);
function getRounds() {
   rounds = document.getElementById("rounds").value;
    setRound(rounds);
}

function setRound(rounds) {
    if (rounds % 2 == 0 || isNaN(rounds)==true) {
       alert("Must be an odd number");
    } else{
    localStorage.setItem("rounds", rounds)
    window.location.replace("chooser.html");}
 }

 function showRound(){
   let set = localStorage.getItem("rounds");
   let statsBox = document.getElementById("statsBox");
   let message = "Round " + round + " out of " + rounds;
   statsBox.innerHTML = message;
 }

 function cTurn(u){
   let moves = ["r", "p", "s"];
   let choice = Math.floor(Math.random()*3);
   let c = moves[choice];
   if (c==u){
      alert("We both chose " + u);
   }
   else findWinner(u, c);
 }
 
 function findWinner(u, c){
   round++
   console.log(round);
    let winArray = [
       ["r", "p", "Computer"], 
       ["p", "s", "Computer"], 
       ["s", "r", "Computer"], 
       ["r", "s", "You"], 
       ["s", "p", "You"], 
       ["p", "r", "You"]
    ];
    for (var i = 0; i<winArray.length; i++){
        if (winArray[i][0]+winArray[i][1]==u+c) break;
        
    }
    alert(u + " Vs. " + c + ". " + winArray[i][2] + " won!");
    showRound();
 }