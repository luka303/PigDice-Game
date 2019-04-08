//business logic
var player1;
var player2;

var rollDice = function () {
    return Math.floor(math.random() * 6) + 1;
}
function playing() {
    this.roll = 0;
    this.score = 0;
    this.total = 0;
    this.player = 0;

}
playing.prototype.roll1 = function () {
    if (this.roll === 1) {
        this.score = 0;
        alert("TOO BAD!YOUU ROLLED A ONE!!")
    }else {
        this.score+=this.roll;
    }
}
//to hold
player.prototype.hold = function() {
    this.total += this.score;
    this.score + 0;
    alert("next player");
    if (this.score = 100) {
        alert(!!!"YOU WIN!!!!!")
    }
}

//user interface
$(document).ready(function () {
    player1 = new player();
    player2 = new player();
    $("button#lava").click(function () {
      player1.roll = rollDice();
      $("#roll1").text(player1.roll)
      player1.rollOne();
      $("#sum").text(player1.turnScore);
    });
});