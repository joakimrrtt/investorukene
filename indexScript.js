let lastClickedBox = null; // To store the last clicked box

function fillContent(title, content, clickedBox) {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <h3 class="text-lg font-bold text-white">${title}</h3>
        <p class="mt-2 text-white">${content}</p>
    `;

    // If there was a previously clicked box, remove its highlight
    if (lastClickedBox) {
        lastClickedBox.classList.remove('bg-blue-400');
        lastClickedBox.classList.add('bg-blue-600');
    }

    // Highlight the clicked box
    clickedBox.classList.remove('bg-blue-600');
    clickedBox.classList.add('bg-blue-400');

    // Update the last clicked box to the current one
    lastClickedBox = clickedBox;
}

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('startamount').value);
    const months = parseInt(document.getElementById('time').value, 10);
    const annualInterestRate = parseFloat(document.getElementById('interest').value);

    // Sjekk at verdiene er gyldige
    if (isNaN(loanAmount) || loanAmount <= 0) {
        displayResult("Vennligst oppgi et gyldig lånebeløp.");
        return;
    }
    if (isNaN(months) || months <= 0) {
        displayResult("Vennligst oppgi et gyldig antall måneder.");
        return;
    }
    if (isNaN(annualInterestRate) || annualInterestRate < 0) {
        displayResult("Vennligst oppgi en gyldig rente.");
        return;
    }

    // Beregning
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -months);
    const monthlyPayment = denominator > 0 
        ? (loanAmount * monthlyInterestRate) / denominator 
        : loanAmount / months;

    // Vise resultatet
    displayResult(`Din månedlige betaling er: ${monthlyPayment.toFixed(2)} kr.`);
}

function displayResult(message) {
    document.getElementById('results').innerText = message;
}




document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Change to any scroll threshold you like
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
