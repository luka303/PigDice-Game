//business logic
var player1;
var player2;

var rollDice = function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playing(roll, score,total, player1, player2) {
    this.roll = 0;
    this.score = 0;
    this.total = 0;
    this.player1 = 0;
    this.player2 = 0;

}
playing.prototype.roll1 = function (addEventListener) {
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
    $("#lava").click(function player1() {
    var cheza = Math.floor(Math.random() * 6) + 1;
    parseInt($("#sum").text(cheza));

    if (cheza != 1) {
        total += cheza;
        parseInt($("#sum").text(total));
    }
    });
});

$(documennt).ready(function() {
    $(".lava").click(function player2()) {
        var cheza2 = Math.floor(Math.random() * 6) + 1;
        parseInt($("#sum").text(cheza2));

        if(cheza2 != 1) {
            total += cheza2;
            parseInt($("#sum").text(total));
        }
    }
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
})