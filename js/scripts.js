//business logic
var player1 =  new player();
var player2 = new player();

var rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
}

function playing() {
    this.roll = 0;
    this.score = 0;
    this.total = 0;
    this.player1 = 0;
    this.player2 = 0;

}
playing.prototype.roll1 = function () {
    if (this.roll === 1) {
        this.score = 0;
        alert("TOO BAD!YOUU ROLLED A ONE!!")
    } else {
        this.score += this.roll;
    }
}
//to hold
playing.prototype.hold = function () {
    this.total += this.score;
    this.currentScore = 0;
    alert("next player");
}


//user interface
$(document).ready(function () {
    $("button#lava").click(function () {
        player1.roll = rollDice();
        $("#roll1").text(player1.roll)
        player1.rollOne();
        $("#sum").text(player1.score);
    });
});

$("button#lava2").click(function () {
    player1.hold();
    $("#sum").text(player1.total);
})
$("button#lava2").click(function () {
    playey2.roll = rollDice();
    $("#roll2").text(player2roll)
    player2.rollOne();
    $("#sum").text(player2.score);
});

$("button#lava2").click(function () {
    player2.hold();
    $("sum").text(player2.total);
});