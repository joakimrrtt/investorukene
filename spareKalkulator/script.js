function submitInfo() {
    let startValue = parseFloat(document.getElementById("startamount").value);
    let years = parseInt(document.getElementById("years").value);
    let interestRate = parseFloat(document.getElementById("interest").value);
    let monthlyDeposit = parseFloat(document.getElementById("monthlydeposit").value);

    calculateSavings(startValue, years, interestRate, monthlyDeposit);
}

function calculateSavings(startValue, years, interestRate, monthlyDeposit) {
    let months = years * 12;
    let monthlyRate = interestRate / 12 / 100; 

    let totalSavings = startValue;

    for (let i = 0; i < months; i++) {
        totalSavings += monthlyDeposit;
        totalSavings += totalSavings * monthlyRate;
    }

    let totalInterest = totalSavings - (startValue + monthlyDeposit * months);

    document.getElementById("results").innerHTML =
        `<p>Totalt Sparebeløp: ${Math.round(totalSavings)} kr</p>` +
        `<p>Totalt Opptjent Rente: ${Math.round(totalInterest)} kr</p>`;
}
