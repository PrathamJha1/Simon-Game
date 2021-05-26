// red event listener
document.querySelector("#red").addEventListener("click", function () {
    var random = randomNumberGenerator();
    if (check(random, 0)) {
        $("#red").addClass("pressed");
        var red = new Audio("sounds/red.mp3");
        red.play();
        setTimeout(function () {
            $("#red").removeClass("pressed");
        }, 100);
    }
    else {
        $("#level-title").addClass("game-over");
        $("#level-title").html("Game Over");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        setTimeout(function () {
            $("#level-title").removeClass("game-over");
            $("#level-title").html("Press A Key to Start");
        }, 1000);
    }
});
// blue event listener
document.querySelector("#blue").addEventListener("click", function () {
    var random = randomNumberGenerator();
    if (check(random, 0)) {
        $("#blue").addClass("pressed");
        var blue = new Audio("sounds/blue.mp3");
        blue.play();
        setTimeout(function () {
            $("#blue").removeClass("pressed");
        }, 100);
    }
    else {
        $("#level-title").addClass("game-over");
        $("#level-title").html("Game Over");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        setTimeout(function () {
            $("#level-title").removeClass("game-over");
            $("#level-title").html("Press A Key to Start");
        }, 1000);
    }
});
// yellow event listener
document.querySelector("#yellow").addEventListener("click", function () {
    var random = randomNumberGenerator();
    if (check(random, 0)) {
        $("#yellow").addClass("pressed");
        var yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
        setTimeout(function () {
            $("#yellow").removeClass("pressed");
        }, 100);
    }
    else {
        $("#level-title").addClass("game-over");
        $("#level-title").html("Game Over");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        setTimeout(function () {
            $("#level-title").removeClass("game-over");
            $("#level-title").html("Press A Key to Start");
        }, 1000);
    }
});
// green event listener
document.querySelector("#green").addEventListener("click", function () {
    var random = randomNumberGenerator();
    if (check(random, 0)) {
        $("#green").addClass("pressed");
        var green = new Audio("sounds/green.mp3");
        green.play();
        setTimeout(function () {
            $("#green").removeClass("pressed");
        }, 100);
    }
    else {
        $("#level-title").addClass("game-over");
        $("#level-title").html("Game Over");
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        setTimeout(function () {
            $("#level-title").removeClass("game-over");
            $("#level-title").html("Press A Key to Start");
        }, 1000);
    }
});
// random number generating function
function randomNumberGenerator() {
    var r = Math.random() * 4;
    r = Math.floor(r);
    return r;
}
// checking function
function check(random, key) {
    if (random == key) {
        return true;
    }
    else {
        return false;
    }
}
