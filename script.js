/* Function getRounds
 * pulls rounds from the input box on the home page and sends to setRounds
 * @param = none
 * @return = none
 */
function getRounds(){
    let rounds = document.getElementById("rounds").value;
    setRounds(rounds);
}

/* Function getRounds
 * Checks if rounds are odd. If even, warning message. 
 * Otherwise, sets round to 1, stores rounds and round in localStorage and loads chooser.html. 
 * @param = founds
 * @localStorage => round, rounds
 * @return = none
 */ 
function setRounds(rounds){
    if (rounds % 2 == 0||isNaN==true) {
        //alert("must be an odd number");
        document.getElementById("rounds").value = "must be an odd number";
    }
    else {
        let score = [0, 0];
        jsonScore = JSON.stringify(score);
        score = localStorage.setItem("score",jsonScore);
        localStorage.setItem("rounds",rounds);
        localStorage.setItem("round", 1);
        window.location.href = "chooser.html";
    }
}

/* Function showRound
 * Gets rounds and round from local storage and displays in chooser.html.
 * @param = none
 * @localStorage => round, rounds
 * @return = none
 */
function showRound(){
    let jsonScore = localStorage.getItem("score");
    score = JSON.parse(jsonScore);
    let round = localStorage.getItem("round");
    let rounds = localStorage.getItem("rounds");
    if (round > rounds) {
        window.location.href = "gameover.html";
    }
    else {
    let statsBox = document.getElementById("statsBox");
    let scoreBox = document.getElementById("scoreBox");
    let statsMessage = "Round " + round + " of " + rounds;
    let scoreMessage = "Score : " + score
    statsBox.innerHTML = statsMessage;
    scoreBox.innerHTML = scoreMessage;
    }
}

function showWinner(){
    let message = ""
   let jsonScore = localStorage.getItem("score");
   score = JSON.parse(jsonScore)
    let scoreBox = document.getElementById("scoreBox");
    if (score[0]>score[1]) {
        message = score[0] + " to "+ score[1]+ " " + you + " won";
    }
    else {
        message = score[0] + " to "+ score[1]+ " " + computer + " won";
    }
    scoreBox.innerHTML = message;
}

/* Function cpuTurn
 * Called by buttons in chooser with userturn u as argument.
 * Generates a computer turn c and sends u and c to findWinner
 * @param = u
 * @return = u,c
 */
function cTurn(u){
    let results = document.getElementById("results");
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3);
    let c = moves[choice];
    if (u == c){
      message = ("We both picked " + u);
      results.innerHTML = message;
  }
  else findWinner(u,c);
}

/* Function findWinner
 * Checks if u & c are equal.  If not, finds winner and updates showRound, 
 * Incrementing round and saving to local storage.
 * @param = u,c
 * @localStorage <=> round++
 * @return = none
 */
function findWinner(u,c){
    let round = localStorage.getItem("round");
    round++;
    let results = document.getElementById("results");
        let winner = " ";
        let winArray=[["r","p","Computer"],["r","s","you"],["p","s","Computer"],["p","r","you"],["s","r","Computer"],["s","p","you"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner= winArray[i][2];
            }
        }
        let message = ("You choose " + u + " and I choose " + c + "<br>"+ winner + " win!");
        results.innerHTML = message;
        let score = localStorage.getItem("score");
        score = JSON.parse(score);
        let players = ["you", "Computer"];
        win = players.indexOf(winner);
        score[win]++;
        jsonScore = JSON.stringify(score);
        score = localStorage.setItem("score",jsonScore);
        localStorage.setItem("round",round);
        showRound();   
    }

    function again(){
        window.location.href = "index.html";
    }
