var $header = $("#gameMain")
var $button = $("#playGameButton")
var $timer = $("#timer")
var counter = 0;
var timerText = 0;
var timerBoolean = false;


function uiUpdate() {
    if (counter === 3) {
        $header.css({
            "font-size": "50px",
            "line-height": "150%",
            "top": "18%"
        })
        $header.text("Little do you know the game has Already Started!")
        timerBoolean = true;

    }
    if (counter === 8) {
        $header.css({
            "font-size": "70px",
            "line-height": "150%",
            "top": "20%"
        })
        $header.text("U Mad Bro?")
    }
}



function run() {
    var randX = Math.floor(Math.random() * (window.innerWidth - 175));
    var randY = Math.floor(Math.random() * (window.innerHeight - 175));
    uiUpdate()
    $button.stop().animate({ "left": randX + "px", "top": randY + "px" });
    counter += 1;
    console.log(counter)

}



$(document).ready(function() {
    $button.on("mouseover", run)

    setInterval(function() {
        if (timerBoolean) {
            timerText += 1;
            $timer.html(`Time Taken: &nbsp; ${timerText}`)
        }

    }, 1000)

    $button.on("click", function() {
        timerBoolean = false;

    })

})