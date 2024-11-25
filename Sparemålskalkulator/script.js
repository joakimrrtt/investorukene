
function submitInfo() {

    let interestChecked = document.getElementById("boolinterest").checked;
    let goalValue = parseFloat(document.getElementById("goalamount").value);
    let startValue = parseFloat(document.getElementById("startamount").value);
    let timeValue = parseFloat(document.getElementById("timeframe").value);
    let interestValue = 0

    if (interestChecked){
        interestValue = parseFloat(document.getElementById("interest").value);
    } else {interestChecked = 0}
    calculate(goalValue, startValue, timeValue, interestValue, interestChecked);
}


//Ikke ferdig med renters rente
function calculate(goal, start, time, interest, isChecked) {
    if (start > goal){
        displayResult("Vennligst oppgi gyldig informasjon (sparemålet er større enn nåværende besparelser)")
    }
    else if (isNaN(goal) || goal <= 0){
        displayResult("Vennligst oppgi et gyldig målbeløp")
    }
    else if (isNaN(start) || start <= 0){
        displayResult("Vennligst oppgi et gyldig nåværende sparebeløp")
    }
    else if (isNaN(time) || time <= 0){
        displayResult("Vennligst oppgi et gyldig antall måneder")}

    else if (isChecked && isNaN(interest) || isChecked && interest <= 0){
        displayResult("Vennligst oppgi en gyldig rente")
    }

     else {monthlySavingsNeeded = (goal - start) / time
        displayResult(`Du må spare ${monthlySavingsNeeded.toFixed(2)} kr hver måned i ${time} måneder`)}
}


function displayResult(message) {
    document.getElementById('results').innerText = message;
}


function showHideInterestCalculator(){
    let interestChecked = document.getElementById("boolinterest").checked;
    if (interestChecked){
        document.getElementById("interestcalc").innerHTML =
        `<label for="interest"> Rente (årlig, %): </label>` +
        `<input type="text" id="interest" value=""></input>`
    } else {
        document.getElementById("interestcalc").innerHTML = ``
    }
}