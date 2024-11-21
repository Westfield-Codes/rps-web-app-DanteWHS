function setRound() {
    let set = prompt("How many rounds?");
    if (set % 2 == 0 || isNaN(set) == true) {
       alert("Must be an odd number");
       return setRound();
    } else{
        alert("Best out of "+set)
    return set;}
 }
