// tip-amount = amount / 100 * percent / people-num
// total-sum = amount / 5 + tip-amount

//acquire the percent
let newPercent;
let allButtons = document.querySelectorAll(".btn");
let customPercent = document.getElementById("custom-percent");

customPercent.addEventListener("input", () => {
  newPercent = customPercent.value;
  console.log(newPercent);
  if (newPercent && amountSum && peopleQty) {
    /*console.log("ХУЙ");*/
    calculateTip(newPercent, amountSum, peopleQty);
  }
});

allButtons.forEach((bt) => {
  bt.addEventListener("click", () => {
    allButtons.forEach((btn) => {
      document.getElementById(btn.id).style.backgroundColor = "rgb(0, 73, 77)";
      document.getElementById(btn.id).style.color = "white";
    });
    newPercent = bt.value;
    console.log(newPercent);
    document.getElementById(bt.id).style.backgroundColor = "rgb(38, 192, 171)";
    document.getElementById(bt.id).style.color = "rgb(0, 73, 77)";

    if (newPercent && amountSum && peopleQty) {
      /*console.log("ХУЙ");*/
      calculateTip(newPercent, amountSum, peopleQty);
    }
  });
});
//
let amountSum;

let billAmount = document.getElementById("amount");
billAmount.addEventListener("input", () => {
  amountSum = billAmount.value;
  if (amountSum === "0") {
    document.getElementById("input-error-bill").style.visibility = "visible";
    document.getElementById("input-error-bill").innerHTML = "can't be zero";
    document.getElementById("amount").style.outline = "2px solid red";
    return 1;
  } else if (amountSum === "") {
    document.getElementById("input-error-bill").innerHTML = "can't be nothing";
    document.getElementById("input-error-bill").style.visibility = "visible";
    document.getElementById("amount").style.outline = "2px solid red";
    return 1;
  } else if (amountSum < 0) {
    document.getElementById("input-error-bill").innerHTML =
      "can't be negative number";
    document.getElementById("input-error-bill").style.visibility = "visible";
    document.getElementById("amount").style.outline = "2px solid red";
    return 1;
  } else {
    document.getElementById("input-error-bill").style.visibility = "hidden";
    document.getElementById("amount").style.outline = "none";
  }

  console.log(amountSum);

  if (newPercent && amountSum && peopleQty) {
    /*console.log("ХУЙ");*/
    calculateTip(newPercent, amountSum, peopleQty);
  }
});

//
let peopleQty;

let peopleNum = document.getElementById("people-num");
peopleNum.addEventListener("input", () => {
  peopleQty = peopleNum.value;
  if (peopleQty === "0") {
    document.getElementById("input-error-people").style.visibility = "visible";
    document.getElementById("input-error-people").innerHTML = "can't be zero";
    document.getElementById("people-num").style.outline = "2px solid red";
    return 1;
  } else if (peopleQty === "") {
    document.getElementById("input-error-people").innerHTML =
      "can't be nothing";
    document.getElementById("input-error-people").style.visibility = "visible";
    document.getElementById("people-num").style.outline = "2px solid red";
    return 1;
  } else if (peopleQty < 0) {
    document.getElementById("input-error-people").innerHTML =
      "can't be negative number";
    document.getElementById("input-error-people").style.visibility = "visible";
    document.getElementById("people-num").style.outline = "2px solid red";
    return 1;
  } else {
    document.getElementById("input-error-people").style.visibility = "hidden";
    document.getElementById("people-num").style.outline = "none";
  }
  console.log(peopleQty);

  if (newPercent && amountSum && peopleQty) {
    /*console.log("ХУЙ");*/
    calculateTip(newPercent, amountSum, peopleQty);
  }
  /* calculateTip(newPercent, amountSum, peopleQty); */
});

if (newPercent && amountSum && peopleQty) {
  /*console.log("ХУЙ");*/
  calculateTip(newPercent, amountSum, peopleQty);
}

function isInputNumber(evnt) {
  let ch = String.fromCharCode(evnt.which);

  if (!/[0-9]/.test(ch)) {
    evnt.preventDefault();
  }
}

function calculateTip(percent, amountNum, peopleNum) {
  //
  /*   console.log(amountNum);
  console.log(peopleNum);
  console.log(percent); */
  let tipAmount = ((amountNum / 100) * percent) / peopleNum;
  let totalSum = amountNum / peopleNum + tipAmount;

  //shortening the decimal
  totalSum = totalSum.toFixed(2);
  tipAmount = tipAmount.toFixed(2);
  /*   console.log(tipAmount, totalSum); */
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
  document.getElementById("input-error-people").style.visibility = "hidden";
  document.getElementById("people-num").style.outline = "none";
  document.getElementById("input-error-bill").style.visibility = "hidden";
  document.getElementById("amount").style.outline = "none";
  document.getElementById("tip").innerHTML = "$0.00";
  document.getElementById("total").innerHTML = "$0.00";
});
