const mainDisplay = document.getElementById("mainDisplay");
const opDisplay = document.getElementById("opDisplay");
let current = "0";
let previous = null; // number before operator
let operator = null; // + - * /
let justCalculated = false; // flag to reset after equals

function updateDisplays() {
  mainDisplay.textContent = current;
  if (previous !== null && operator) {
    opDisplay.textContent = previous + " " + symbolFor(operator);
  } else if (justCalculated) {
    // keep whatever was written during equals (a + b =)
  } else {
    opDisplay.textContent = "";
  }
}

function symbolFor(op) {
  return op === "*" ? "×" : op === "/" ? "÷" : op;
}

function inputNumber(n) {
  if (justCalculated) {
    current = "0";
    justCalculated = false;
  }
  if (n === ".") {
    if (!current.includes(".")) current += ".";
  } else {
    current = current === "0" ? n : current + n;
  }
  updateDisplays();
}

function chooseOperator(op) {
  if (previous !== null && !justCalculated) {
    equals(); // chain operations
  }
  previous = current;
  operator = op;
  current = "0";
  justCalculated = false;
  updateDisplays();
}

function trimResult(num) {
  if (Math.abs(num) > 999999999) return num.toExponential(3);
  const s = num.toString();
  return s.length > 12 ? Number(num.toPrecision(12)).toString() : num;
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  justCalculated = false;
  opDisplay.textContent = "";
  updateDisplays();
}

function toggleSign() {
  if (current === "0" || current === "ERR") return;
  current = current.startsWith("-") ? current.slice(1) : "-" + current;
  updateDisplays();
}

function percent() {
  if (current === "ERR") return;
  current = String(trimResult(parseFloat(current) / 100));
  updateDisplays();
}

function equals() {
  if (operator === null) return;
  const aNum = parseFloat(previous);
  const bNum = parseFloat(current);
  let result;
  switch (operator) {
    case "+":
      result = aNum + bNum;
      break;
    case "-":
      result = aNum - bNum;
      break;
    case "*":
      result = aNum * bNum;
      break;
    case "/":
      result = bNum === 0 ? "ERR" : aNum / bNum;
      break;
  }
  current = result === "ERR" ? "ERR" : String(trimResult(result));
  opDisplay.textContent = `${previous} ${symbolFor(operator)} ${bNum} =`;
  previous = null;
  operator = null;
  justCalculated = true;
  updateDisplays();
}

// Event delegation for buttons
document.querySelector(".button-grid").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.dataset.number) inputNumber(btn.dataset.number);
  else if (btn.dataset.operator) chooseOperator(btn.dataset.operator);
  else if (btn.dataset.action) {
    const act = btn.dataset.action;
    if (act === "clear") clearAll();
    else if (act === "sign") toggleSign();
    else if (act === "percent") percent();
    else if (act === "equals") equals();
  }
});

// Basic keyboard support
window.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") inputNumber(e.key);
  else if (e.key === ".") inputNumber(".");
  else if (["+", "-", "*", "/"].includes(e.key)) chooseOperator(e.key);
  else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    equals();
  } else if (e.key === "Escape") clearAll();
});

// Clock (IST) at bottom
const clockEl = document.getElementById("clock");
function updateClock() {
  const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const dd = String(nowIST.getDate()).padStart(2, "0");
  const mm = String(nowIST.getMonth() + 1).padStart(2, "0");
  const yyyy = nowIST.getFullYear();
  const hh = String(nowIST.getHours()).padStart(2, "0");
  const mins = String(nowIST.getMinutes()).padStart(2, "0");
  const ss = String(nowIST.getSeconds()).padStart(2, "0");
  clockEl.textContent = `IST:  ${dd}-${mm}-${yyyy},  ${hh}:${mins}:${ss}`;
}
setInterval(updateClock, 1000);
updateClock();
updateDisplays();
