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
    if this.roll === 1 {
        this.score = 0;
        alert("TOO BAD!YOUU ROLLED A ONE!!")
    }else {
        this.score+=this.roll;
    }
}
//