function Carcalculate() {

    console.log("Button clicked");
    var priceOfvehicle = parseFloat(document.getElementById('priceOfvehicle').value);
    var downpayment = parseFloat(document.getElementById('downpayment').value);
    var loanduration = parseFloat(document.getElementById('loanduration').value);
    var paymentfrequency = document.getElementById('paymentfrequency').value;
    var interestrate = parseFloat(document.getElementById('interestrate').value);

    if (isNaN(interestrate) || interestrate <= 0) {
        alert("Please enter a valid interest rate");
        return;
    }

    var financedamount = priceOfvehicle - downpayment;

    var monthlyinterestRate = (interestrate / 100) / 12;

    var totalpayments; 
    if (paymentfrequency == 'Monthly'){
        totalpayments = loanduration;
    } else if (paymentfrequency == 'Weekly'){
        totalpayments = loanduration * 52 / 12;
    } else if (paymentfrequency == 'Bi-weekly'){
        totalpayments = loanduration * 26 / 12;
    }

    var paymentamount = (financedamount * monthlyinterestRate) / (1 - Math.pow(1 + monthlyinterestRate, -totalpayments));

    var totalinterest = paymentamount * totalpayments - financedamount;

    
    var resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `
        <p>Financed amount: $${financedamount.toFixed(2)}</p>
        <p>Payment amount: $${paymentamount.toFixed(2)}</p>
        <p>Total interest: $${totalinterest.toFixed(2)}</p>
    `;


}
