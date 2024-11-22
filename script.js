function getRounds() {
    let set = document.getElementById("rounds").value;
    setRound(set);
}

function setRound(set) {
    if (set % 2 == 0 || isNaN(set)==true) {
       alert("Must be an odd number");
    } else{
        alert("Best out of "+ set);
    localStorage.setItem("set", set);}
    window.location.replace("chooser.html");
 }

 function cTurn(u){
    let moves = ["r", "p", "s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    findWinner(u, c)
 }
 
 function findWinner(u, c){
    let winArray = [
       ["r", "p", "Computer"], 
       ["p", "s", "Computer"], 
       ["s", "r", "Computer"], 
       ["r", "s", "You"], 
       ["s", "p", "You"], 
       ["p", "r", "You"]
    ];
    for (var i = 0; i<winArray.length; i++){
        if (winArray[i][0]+winArray[i][1]==uChoice+cChoice) break;
    }
    alert(uChoice + " Vs. " + cChoice + ". " + winArray[i][2] + " won!");
 }