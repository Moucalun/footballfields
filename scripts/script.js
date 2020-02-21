var body = document.getElementById("body");
var inputBox = document.getElementById("inputBox");
var measType = document.getElementById("normalPeopleMeasurement");
var result = document.getElementById("result");

// prettier-ignore
function conversion() {
  if (measType.value == "Meters") {
    res = (inputBox.value / 131.2335);
    ((res % 1) == 0) ? Math.trunc(res) : res.toPrecision(4);
    result.innerText = inputBox.value + " Meters equals " + res + "\n Football Fields";
  } else {
    res = (inputBox.value / 120);
    ((res % 1) == 0) ? Math.trunc(res) : res.toPrecision(4);
    result.innerText = inputBox.value + " Yards equals "  + res + "\n Football Fields";
  }
  result.style.fontSize = "24pt"
}

inputBox.addEventListener("change", conversion);
inputBox.addEventListener("blur", conversion);
measType.addEventListener("click", conversion);
