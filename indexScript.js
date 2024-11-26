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

function generateRandomValues() {
    // Random loan amount between 50,000 and 1,000,000
    const loanAmount = Math.floor(Math.random() * (1000000 - 50000) + 50000); 
    
    // Random months between 6 and 360
    const months = Math.floor(Math.random() * (360 - 6) + 6); 
    
    // Random interest rate between 1.5% and 6%
    const annualInterestRate = (Math.random() * (6 - 1.5) + 1.5).toFixed(2); 

    return { loanAmount, months, annualInterestRate };
}

function simulateTyping(inputId, value) {
    const inputElement = document.getElementById(inputId);
    let index = 0;

    inputElement.value = ''; // Clear the input field before typing
    function typeWriter() {
        if (index < value.length) {
            inputElement.value += value.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Delay between each character
        }
    }

    typeWriter(); // Start typing effect
}

function calculateLoan() {
    const { loanAmount, months, annualInterestRate } = generateRandomValues();

    // Simulate typing for each input field
    simulateTyping('startamount', loanAmount.toString());
    simulateTyping('time', months.toString());
    simulateTyping('interest', annualInterestRate.toString());

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
    // Start the cycle and the first calculation immediately when the page loads
    calculateLoan();  // First calculation immediately
    startRandomCycle(); // Start the 5-second cycle after the first calculation
    
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Change to any scroll threshold you like
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
