function submitInfo() {

    let LoanValue = parseFloat(document.getElementById("startamount").value);
    let timeValue = parseInt(document.getElementById("time").value);
    let interestValue = parseFloat(document.getElementById("interest").value);

    calculate(LoanValue, timeValue, interestValue);
}

function calculate(value, time, interest) {
    let monthlyRate = interest / 12 / 100; 

    let monthlyPayment = value * (monthlyRate * Math.pow(1 + monthlyRate, time)) / (Math.pow(1 + monthlyRate, time) - 1);

    totalCost = (monthlyPayment * time); 
    let totalFee = totalCost - value;  

    // change the html
    document.getElementById("results").innerHTML =
        `<p>Total kostnad: ${totalCost.toFixed(2)} kr</p>` +
        `<p>Renter/Gebyr: ${totalFee.toFixed(2)} kr</p>` +
        `<p>Månedlig betaling: ${monthlyPayment.toFixed(2)} kr</p>`;
}
