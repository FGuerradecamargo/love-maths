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
                runGmame(gameType);
            }
        })
    }

    runGmame("addition")
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGmame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.randoma() * 25 +1);
    let num2 = Math.floor(Math.randoma() * 25 +1);

    if (gameType === "addition") {
        displayAdditionalQuestion(num1, num2);
    } else {
        alert(`Unknow game type: ${gameType}`);
        throw `Unknow game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {

}

 function canculateCorrectAnswer() {

 }

 function incrementScore() {

 }

 function incrementWrongAnswer() {

 }

 function displayAdditionalQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
 }

 function displaySubtratQuestion() {

 }

 function displaymultiplyQuestion() {

 }
