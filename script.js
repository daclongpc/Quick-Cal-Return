const totalInput = document.getElementById("total");
const investInput = document.getElementById("invest");
const maxProfitInput = document.getElementById("maxProfit");

const insuranceOutput = document.getElementById("insurance");
const breakEvenOutput = document.getElementById("breakEven");
const finalReturnOutput = document.getElementById("finalReturn");
const profitPercentOutput = document.getElementById("profitPercent");
const insurancePercentOutput = document.getElementById("insurancePercent");

function calculate() {
    let total = parseFloat(totalInput.value) || 0;
    let invest = parseFloat(investInput.value) || 0;
    let maxProfit = parseFloat(maxProfitInput.value) || 0;

    // Insurance
    let insurance = total - invest;
    insuranceOutput.innerText = insurance.toFixed(2);
    // Insurance %
    if (total > 0) {
    let insurancePercent = (insurance * 100) / total;
    insurancePercentOutput.innerText = insurancePercent.toFixed(2) + "%";
    } else {
    insurancePercentOutput.innerText = "0%";
    }

    // Profit % trên invest
    if (invest > 0) {
        let profitPercent = (maxProfit * 100) / invest;
        profitPercentOutput.innerText = profitPercent.toFixed(2) + "%";
    } else {
        profitPercentOutput.innerText = "0%";
    }

    // Break-even
    if (insurance > 0) {
        let breakEven = (invest * 100) / insurance;
        breakEvenOutput.innerText = breakEven.toFixed(2) + "%";
    } else {
        breakEvenOutput.innerText = "0%";
    }
    // Max Return (ẩn trước đó giờ hiển thị)
let maxReturn = invest + maxProfit;

// Final % Return từ Total
if (total > 0) {
    let finalPercent = ((maxReturn - total) * 100) / total;

    finalReturnOutput.innerText =
        "$" + maxReturn.toFixed(2) +
        " (" + finalPercent.toFixed(2) + "% return)";
} else {
    finalReturnOutput.innerText = "$0 (0% return)";
}
}

totalInput.addEventListener("input", calculate);
investInput.addEventListener("input", calculate);
maxProfitInput.addEventListener("input", calculate);
