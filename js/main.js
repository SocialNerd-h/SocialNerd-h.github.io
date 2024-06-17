// tip-amount = amount / 100 * percent / people-num
// total-sum = amount / 5 + tip-amount

//acquire the percent
let newPercent;
let allButtons = document.querySelectorAll(".btn");
let customPercent = document.getElementById("custom-percent");
customPercent.addEventListener("change", () => {
  newPercent = customPercent.value;
  console.log(newPercent);
});
allButtons.forEach((bt) => {
  bt.addEventListener("click", () => {
    newPercent = bt.value;
  });
});

let billAmount = document.getElementById("amount");
billAmount.addEventListener("change", () => {
  amount = billAmount.value;
  console.log(amount);
});

let peopleNum = document.getElementById("people-num");
peopleNum.addEventListener("change", () => {
  peopleQty = peopleNum.value;
  if (peopleQty === "0") {
    document.getElementById("zero").style.visibility = "visible";
    document.getElementById("people-num").style.outline = "3px solid red";
    console.log(peopleQty);
    return 1;
  } else {
    document.getElementById("zero").style.visibility = "hidden";
    document.getElementById("people-num").style.outline = "none";
    console.log(peopleQty);
  }
  calculateTip(newPercent, amount, peopleQty);
});

function calculateTip(newPercent, amount, peopleNum) {
  //
  let tipAmount = ((amount / 100) * newPercent) / peopleNum;
  let totalSum = amount / 5 + tipAmount;

  //shortening the decimal
  totalSum = totalSum.toFixed(2);
  tipAmount = tipAmount.toFixed(2);
  console.log(tipAmount, totalSum);
  resetBtn.style.backgroundColor = "rgb(38, 192, 171)";
  //inserting the result in html
  document.getElementById("tip").innerHTML = `$${tipAmount}`;
  document.getElementById("total").innerHTML = `$${totalSum}`;
}

let resetBtn = document.getElementById("go");
resetBtn.addEventListener("click", () => {
  resetBtn.style.backgroundColor = "rgb(1, 116, 116)";
  amount = document.getElementById("amount");
  amount.value = "";
  peopleNum = document.getElementById("people-num");
  peopleNum.value = "";
  newPercent = "";
  customPercent = document.getElementById("custom-percent");
  customPercent.value = "";
  document.getElementById("zero").style.visibility = "hidden";
  document.getElementById("tip").innerHTML = "$0.00";
  document.getElementById("total").innerHTML = "$0.00";
});
