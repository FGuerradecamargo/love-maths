// Wait for the DOM to finish lading before runnin the game
// Get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGmame() {

}

function checkAnswer() {

}

 function canculateCorrectAnswer() {

 }

 function incrementScore() {

 }

 function incrementWrongAnswer() {

 }

 function displayAdditionalQuestion() {

 }

 function displaySubtratQuestion() {

 }

 function displaymultiplyQuestion() {

 }
